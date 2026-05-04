# Jest - Estudos de Testes Automatizados

[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](LICENSE)
![Node.js Version](https://img.shields.io/badge/Node.js-24+-green.svg)
![Jest Version](https://img.shields.io/badge/Jest-30.3.0-orange.svg)
![Coverage](https://img.shields.io/badge/Coverage-100%25-success)

Repositório dedicado ao estudo e prática de testes automatizados utilizando **Jest**, com foco em aplicações financeiras e integração contínua.

---

## 📋 Sumário

- [Sobre o Projeto](#-sobre-o-projeto)
- [Aprendizados](#-aprendizados)
- [Tecnologias](#-tecnologias)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Como Executar](#-como-executar)
- [Scripts Disponíveis](#-scripts-disponíveis)
- [Estratégia de Testes](#-estratégia-de-testes)
- [Cobertura de Testes](#-cobertura-de-testes)
- [CI/CD Pipeline](#-cicd-pipeline)
- [Autor](#-autor)
- [Licença](#-licença)

---

## 🎯 Sobre o Projeto

Este repositório contém estudos práticos de testes automatizados utilizando **Jest**, um dos frameworks de teste mais populares para JavaScript. O projeto simula cenários reais com módulos financeiros e de processamento de pedidos, permitindo praticar:

- **Testes Unitários** - Testando funções isoladas
- **Testes de Integração** - Testando como os módulos trabalham juntos
- **Testes com Mocks** - Simulando dependências externas e APIs
- **Testes de Snapshot** - Capturando e validando saída de componentes
- **Integração Contínua** - Testes automatizados no GitHub Actions

O código inclui módulos para operações financeiras (autenticação, consulta de saldo) e processamento de pedidos (carrinho, precificação, cálculo de frete), todos testados exaustivamente com Jest.

---

## 📚 Aprendizados

Ao longo deste projeto, os seguintes conceitos foram dominados:

- ✅ **Criação de testes unitários** do zero com Jest
- ✅ **Uso avançado de Mocks, Stubs e Spies** para isolamento de dependências
- ✅ **Configuração de pipelines CI/CD** com GitHub Actions
- ✅ **Interpretação e otimização** de métricas de cobertura de código
- ✅ **Geração de relatórios profissionais** em formatos JUnit e JSON
- ✅ **Depuração de testes falhos** com precisão
- ✅ **Estruturação de suítes de teste** sustentáveis com boas práticas
- ✅ **Organização de testes co-locados** junto aos módulos de origem

---

## 🛠️ Tecnologias

| Tecnologia | Descrição |
|------------|-----------|
| **JavaScript (ES6+)** | Linguagem de programação |
| **Jest 30.3.0** | Framework de testes |
| **Babel** | Transpilador para módulos ES |
| **Axios** | Cliente HTTP para testes de integração |
| **GitHub Actions** | Automação de CI/CD |
| **jest-junit** | Geração de relatórios JUnit |

---

## 📂 Estrutura do Projeto

```
jest/
├── src/
│   ├── financeiro/              # Módulo financeiro
│   │   ├── financeiro.js        # Autenticação e operações de saldo
│   │   ├── financeiro.test.js   # Testes de integração com API externa
│   │   ├── financeiroMock.test.js # Testes com mocks
│   │   ├── relatorioService.js  # Geração de relatórios financeiros
│   │   ├── relatorioService.test.js
│   │   └── __snapshots__/       # Arquivos de snapshot
│   │
│   └── pedidos/                 # Módulo de pedidos
│       ├── pedidos.js           # Utilitários e operações de carrinho
│       ├── pedidos.test.js      # Testes unitários abrangentes
│       ├── pedidoService.js     # Regras de negócio de pedidos
│       └── pedidoService.test.js
│
├── __tests__/                   # Testes de integração/E2E (reservado)
├── coverage/                    # Relatórios de cobertura (gerados)
│   └── lcov-report/             # Relatório HTML de cobertura
├── reports/                     # Relatórios de execução
│   └── junit.xml               # Resultados no formato JUnit
├── jest.config.js              # Configuração do Jest
├── .babelrc                    # Configuração do Babel
├── package.json                # Dependências e scripts
└── .github/
    └── workflows/
        └── jest.yml            # Configuração do pipeline CI/CD
```

---

## 🚀 Como Executar

### Pré-requisitos

- **Node.js** 24.x ou superior
- **npm** (vem junto com o Node.js)
- **Git**

### Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd jest
```

2. Instale as dependências:
```bash
npm install
```

### Executando os Testes

Para rodar todos os testes:
```bash
npm test
```

---

## 📜 Scripts Disponíveis

| Script | Comando | Descrição |
|--------|---------|-----------|
| **Testar** | `npm test` | Executa todos os testes unitários e de integração |
| **Watch** | `npm run test:watch` | Executa testes em modo observador |
| **Cobertura** | `npm run test:coverage` | Gera relatório de cobertura em `coverage/` |
| **CI** | `npm run test:ci` | Executa testes otimizados para CI com relatórios |
| **Relatório** | `npm run test:report` | Gera relatório JSON dos testes |
| **Dashboard** | `npm run dashboard` | Inicia dashboard local de testes (se aplicável) |

---

## 🧪 Estratégia de Testes

### Módulo: Financeiro

**Arquivos Fonte:**
- `financeiro.js` - Integração com API externa (Sr. Barriga)
- `relatorioService.js` - Geração de relatórios financeiros

**Cobertura de Testes:**
- Testes de integração com endpoints reais de API
- Testes com mocks para isolamento unitário
- Testes de snapshot para consistência de respostas

**Funcionalidades Principais:**
- Autenticação de usuários (`logar`)
- Consulta de saldo (`consultarSaldo`)
- Geração de resumo financeiro (`gerarResumoFinanceiro`)

### Módulo: Pedidos

**Arquivos Fonte:**
- `pedidos.js` - Funções utilitárias para operações de pedidos
- `pedidoService.js` - Regras de negócio para processamento de pedidos

**Cobertura de Testes:**
- Busca de pedidos por ID
- Cálculo de frete
- Gestão de carrinho
- Confirmação por email
- Consultas assíncronas de preços
- Testes de funções mock

**Funcionalidades Principais:**
- Operações CRUD de pedidos
- Gestão de carrinho com validação
- Notificações assíncronas por email
- Consultas de preços baseadas em Promises
- Cálculos de desconto com mocks

---

## 📊 Cobertura de Testes

O projeto exige uma cobertura mínima de **90%** em todos os módulos. Status atual:

| Módulo | Cobertura | Status |
|--------|-----------|--------|
| `financeiroService.js` | 100% | ✅ |
| `relatorioService.js` | 100% | ✅ |
| `pedidoService.js` | 100% | ✅ |

**Detalhamento da Cobertura:**
- **Linhas:** 100%
- **Comandos:** 100%
- **Funções:** 100%
- **Ramos (Branches):** 100%

Visualize o relatório HTML detalhado em: `coverage/lcov-report/index.html`

---

## 🔧 Padrões de Teste

### Testes Co-locados
Os arquivos de teste são colocados junto aos seus módulos correspondentes:
```
src/financeiro/
  ├── financeiro.js
  └── financeiro.test.js
```

### Blocos Describe
Os testes são organizados por funcionalidade:
```javascript
describe('Pedido Service', () => {
  describe('calcularTotal', () => { ... })
  describe('aplicarDesconto', () => { ... })
  describe('fecharPedido', () => { ... })
})
```

### Gestão de Mocks
Limpeza adequada após cada teste:
```javascript
afterEach(() => {
  mock.mockRestore()
})
```

---

## 🔄 Pipeline CI/CD

### Workflow do GitHub Actions

O arquivo `.github/workflows/jest.yml` é executado automaticamente ao:
- Fazer push para as branches `main` ou `master`
- Criar pull requests para `main` ou `master`

**Etapas do Pipeline:**
1. Checkout do código do repositório
2. Configuração do ambiente Node.js 24.x
3. Instalação das dependências
4. Execução dos testes unitários
5. Geração de relatórios de cobertura
6. Execução de testes otimizados para CI com saída JUnit
7. Publicação de relatórios via `dorny/test-reporter`

**Características do Pipeline:**
- ⚡ Executa no Ubuntu latest
- 📝 Relatórios JUnit para integração com GitHub
- 📈 Rastreamento de cobertura com limites
- 🔍 Logs detalhados e artefatos

---

## 👤 Autor

**Rafael Felipe**
- 🔗 [LinkedIn](https://www.linkedin.com/in/rafaelrfelipe/)
- 📧 Contato para colaborações e oportunidades

---

## 📄 Licença

Este projeto está licenciado sob a **Licença ISC**. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 💡 Contribuição

Contribuições são bem-vindas! Ao contribuir:

1. Siga o estilo de código existente
2. Mantenha a cobertura mínima de 90%
3. Adicione testes para novas funcionalidades
4. Atualize a documentação conforme necessário
5. Certifique-se de que todos os testes passam antes de enviar

---

<div align="center">
  <p>Construído com dedicação ao estudo de testes automatizados</p>
  <p>— Felizes Testes! 🧪 —</p>
</div>

---