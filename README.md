# Jest Financeiro Testes

![GitHub repo size](https://img.shields.io/github/repo-size/rafarfelipe/jest-financeiro-testes)
![GitHub last commit](https://img.shields.io/github/last-commit/rafarfelipe/jest-financeiro-testes)
![GitHub license](https://img.shields.io/github/license/rafarfelipe/jest-financeiro-testes)
![Jest](https://img.shields.io/badge/Jest-30.3.0-99424f?logo=jest)
![Node](https://img.shields.io/badge/Node-24.x-339933?logo=node.js)
![Coverage](https://img.shields.io/badge/Coverage-100%25-brightgreen)

> Repositório dedicado ao estudo e prática de testes automatizados com Jest, focando em aplicações financeiras e integração contínua.

O projeto simula cenários reais com módulos de **financas** e **pedidos**, permitindo praticar testes de integração com APIs externas e mocks.

### API Utilizada

Os testes de integração sao realizados contra a API do [Barriga React](https://barrigareact.wcaquino.me/), uma aplicacao de controle financeiro utilizada para testes e aprendizado.

### Dashboard de Testes

Acompanhe a execução dos testes em tempo real: [Dashboard](http://localhost:3000)

---

## Indice

- [Sobre](#sobre)
- [Aprendizados](#aprendizados)
- [Tecnologias](#tecnologias)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Como executar](#como-executar)
- [Testes](#testes)
- [Organização de Testes](#organização-de-testes)
- [CI/CD](#cicd)
- [Autor](#autor)

---

## Sobre

Este repositório reúne estudos praticos de testes automatizados utilizando **Jest**. O foco e dominar desde testes unitarios basicos ate configuracoes avancadas de cobertura e integracao continua com GitHub Actions.

O projeto simula cenarios reais com módulos de **financas** e **pedidos**, permitindo praticar testes de integração com APIs externas e mocks.

---

## Aprendizados

Durante o desenvolvimento deste projeto, foram absorvidos os seguintes conceitos:

- Criar testes unitarios do zero com Jest
- Dominar o uso de Mocks, Stubs e Spies
- Configurar pipelines de Integracao Continua (CI) no GitHub Actions
- Interpretar e otimizar metricas de cobertura de codigo
- Gerar relatorios profissionais em formatos JUnit e JSON
- Debugar testes falhos com precisao
- Estruturar suites de testes sustentaveis com boas práticas
- Organizar testes co-locados junto aos módulos

---

## Tecnologias

As seguintes ferramentas foram usadas na construcao do projeto:

- **JavaScript (ES6+)**
- **Jest 30.x** - Framework de testes
- **Babel** - Transpilador para suporte a ES Modules
- **Axios** - Cliente HTTP para testes de integracao
- **GitHub Actions** - CI/CD
- **Chart.js** - Visualização de dados no dashboard

---

## Estrutura do Projeto

```
jest-financeiro-testes/
├── src/
│   ├── financeiro/       # Modulo financeiro e testes de integracao
│   │   ├── financeiro.js
│   │   ├── financeiro.test.js
│   │   └── __snapshots__/
│   ├── pedidos/          # Modulo de pedidos e servicos
│   │   ├── pedidoService.js
│   │   └── pedidoService.test.js  # Todos os testes co-locados
│   └── basico/           # Testes basicos (calculadora, matchers)
├── .github/
│   └── workflows/       # Pipeline CI/CD
├── __tests__/           # Testes de integracao/E2E
├── coverage/            # Relatorios de cobertura
├── reports/             # Relatorios JUnit
├── dashboard-server.js  # Servidor do dashboard
├── dashboard.html       # Interface do dashboard
├── jest.config.js       # Configuracao do Jest
├── .babelrc             # Configuracao do Babel
└── package.json
```

---

## Como executar

### Pre-requisitos
- Node.js 24.x ou superior
- Git

### Passos

```bash
# Clone o repositorio
git clone git@github.com:rafarfelipe/jest-financeiro-testes.git

# Acesse a pasta
cd jest-financeiro-testes

# Instale as dependencias
npm install

# Execute os testes
npm test
```

---

## Testes

### Executar todos os testes
```bash
npm test
```

### Executar em modo watch
```bash
npm run test:watch
```

### Gerar relatorio de cobertura
```bash
npm run test:coverage
```

### Executar testes com relatorio (CI)
```bash
npm run test:ci
```

### Iniciar dashboard
```bash
npm start
# Acesse http://localhost:3000
```

### Status Atual dos Testes

✅ **Test Suites:** 6 passed, 6 total  
✅ **Tests:** 32 passed, 32 total  
✅ **Cobertura:** 100% em todos os módulos  

### Cobertura de Testes
O projeto mantem uma meta de **90% de cobertura** em linhas de codigo, conforme configurado em `jest.config.js`.

Atualmente atingimos **100% de cobertura** em todos os módulos:
- `financeiroService.js` - 100%
- `relatorioService.js` - 100%
- `pedidoService.js` - 100%

---

## Organização de Testes

### Boas Práticas Adotadas

1. **Testes Co-locados**: Arquivos de teste na mesma pasta dos módulos (`src/**/*.test.js`)
2. **Estruturação com Describe**: Separação clara por função/teste
3. **Limpeza de Mocks**: Uso de `mockRestore()` após cada teste
4. **Testes Independentes**: Sem dependência entre casos de teste
5. **Nomes Descritivos**: Nomes claros para funções e testes

### Estrutura dos Testes

```javascript
describe('Pedido Service', () => {
  describe('calcularTotal', () => { ... })      // Teste unitário
  describe('aplicarDesconto', () => { ... })    // Teste unitário
  describe('gerarNota', () => { ... })          // Teste unitário
  describe('fecharPedido', () => { ... })       // Teste de integração
})
```

---

## CI/CD

O projeto possui integracao continua configurada via **GitHub Actions**.

- Arquivo: `.github/workflows/jest.yml`
- Executa automaticamente em push e pull requests para `main`
- Node.js 24.x
- Instala dependencias e executa todos os testes
- Gera relatórios JUnit para visualização no GitHub

### Pipeline

```
1. Checkout do código
2. Setup Node.js 24.x
3. Instalação de dependências (npm install)
4. Execução dos testes (npm run test:ci)
   - Testes unitários e de integração
   - Cobertura de código
   - Geração de relatórios
5. Publicação do relatório de testes
```

---

## Autor

Feito por Rafael Felipe.

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/rafarfelipe)

---

## Licenca

Este projeto esta sob a licenca **ISC**. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<p align="center">Desenvolvido com dedicacao estudando testes automatizados</p>