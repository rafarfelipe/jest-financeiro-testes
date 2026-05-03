const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const { spawn } = require('child_process');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

// Store active test processes
const activeTests = new Map();

// Serve coverage reports
app.use('/coverage', express.static(path.join(__dirname, 'coverage', 'lcov-report')));

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// API: Get test report
app.get('/api/report', (req, res) => {
  const reportPath = path.join(__dirname, 'report.json');
  if (!fs.existsSync(reportPath)) {
    return res.status(404).json({ error: 'report.json não encontrado. Execute os testes primeiro.' });
  }
  res.sendFile(reportPath);
});

// API: Get coverage data
app.get('/api/coverage', (req, res) => {
  const coveragePath = path.join(__dirname, 'coverage', 'coverage-final.json');
  if (!fs.existsSync(coveragePath)) {
    return res.status(404).json({ error: 'Dados de cobertura não encontrados. Execute os testes com cobertura primeiro.' });
  }
  res.sendFile(coveragePath);
});

// API: Get JUnit report
app.get('/api/junit', (req, res) => {
  const junitPath = path.join(__dirname, 'reports', 'junit.xml');
  if (!fs.existsSync(junitPath)) {
    return res.status(404).json({ error: 'Relatório JUnit não encontrado.' });
  }
  res.sendFile(junitPath);
});

// SSE: Stream test execution output
app.get('/api/run-tests-stream', (req, res) => {
  const testId = Date.now().toString();

  // Set SSE headers
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');
  res.setHeader('X-Accel-Buffering', 'no');

  const sendEvent = (event, data) => {
    res.write(`event: ${event}\n`);
    res.write(`data: ${JSON.stringify(data)}\n\n`);
  };

  sendEvent('start', { testId, message: 'Iniciando testes...' });

  const cmd = 'npm';
  const args = ['run', 'test:report'];

  const proc = spawn(cmd, args, {
    cwd: __dirname,
    shell: true,
    env: { ...process.env, FORCE_COLOR: '0' }
  });

  activeTests.set(testId, proc);

  let output = '';
  let isComplete = false;

  proc.stdout.on('data', (data) => {
    const text = data.toString();
    output += text;
    sendEvent('output', { text });
  });

  proc.stderr.on('data', (data) => {
    const text = data.toString();
    output += text;
    sendEvent('output', { text });
  });

  proc.on('close', (code) => {
    if (isComplete) return;
    isComplete = true;
    activeTests.delete(testId);

    if (code === 0) {
      // Run coverage after tests pass
      const covProc = spawn('npm', ['run', 'test:coverage'], {
        cwd: __dirname,
        shell: true,
        env: { ...process.env, FORCE_COLOR: '0' }
      });

      covProc.stdout.on('data', (data) => {
        const text = data.toString();
        output += text;
        sendEvent('output', { text });
      });

      covProc.stderr.on('data', (data) => {
        const text = data.toString();
        output += text;
        sendEvent('output', { text });
      });

      covProc.on('close', (covCode) => {
        sendEvent('complete', {
          success: true,
          code,
          coverageCode: covCode,
          message: 'Testes concluídos com sucesso!'
        });
        res.end();
      });
    } else {
      sendEvent('complete', {
        success: false,
        code,
        message: 'Testes falharam',
        output: output.substring(0, 2000)
      });
      res.end();
    }
  });

  req.on('close', () => {
    if (!isComplete) {
      proc.kill();
      activeTests.delete(testId);
    }
  });
});

// API: Run tests (non-streaming fallback)
app.post('/api/run-tests', (req, res) => {
  const type = req.body?.type || 'all';
  const cmd = type === 'coverage'
    ? 'npm run test:coverage'
    : 'npm run test:report && npm run test:coverage';

  const timeout = 120000;

  const { exec } = require('child_process');
  exec(cmd, { cwd: __dirname, timeout }, (error, stdout, stderr) => {
    if (error) {
      if (error.killed && error.signal === 'SIGTERM') {
        return res.status(504).json({
          success: false,
          error: 'Timeout: os testes excederam o tempo limite de 2 minutos.'
        });
      }
      return res.status(500).json({
        success: false,
        error: error.message,
        stderr: stderr ? stderr.toString().substring(0, 500) : ''
      });
    }
    res.json({
      success: true,
      output: stdout ? stdout.toString().substring(0, 2000) : ''
    });
  });
});

// Serve dashboard
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dashboard.html'));
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint não encontrado' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error('Erro no servidor:', err);
  res.status(500).json({ error: 'Erro interno do servidor' });
});

app.listen(PORT, () => {
  console.log(`\n🚀 Dashboard rodando em http://localhost:${PORT}\n`);
});
