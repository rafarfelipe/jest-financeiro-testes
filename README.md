# Jest Financeiro Testes

> Repositório dedicado ao estudo e prática de testes automatizados com Jest, focando em aplicações financeiras e integração contínua.

## Índice

- [Jest Financeiro Testes](#jest-financeiro-testes)
  - [Índice](#índice)
  - [Sobre](#sobre)
  - [Aprendizados](#aprendizados)
  - [Tecnologias](#tecnologias)
  - [Estrutura do Projeto](#estrutura-do-projeto)
  - [Como executar](#como-executar)
  - [Testes](#testes)
  - [Status Atual dos Testes](#status-atual-dos-testes)
  - [Cobertura de Testes](#cobertura-de-testes)
  - [Organização de Testes](#organização-de-testes)
    - [Boas Práticas Adotadas](#boas-práticas-adotadas)
    - [Estrutura de Teste Exemplos](#estrutura-de-teste-exemplos)
  - [CI/CD](#cicd)
  - [Autor](#autor)
  - [Licença](#licença)

---

## Sobre

Este repositório reúne estudos práticos de testes automatizados utilizando **Jest**. O objetivo é dominar desde testes unitários básicos até configurações avançadas de cobertura e integração contínua com GitHub Actions.

Além disso, o projeto simula cenários reais com módulos de **finanças** e **pedidos**, permitindo praticar testes de integração com APIs externas e mock relevantes.

---

## Aprendizados

Durante o desenvolvimento deste projeto, foram absorvidos os seguintes conceitos:

- **Criar** testes unitários do zero com Jest
- **Dominar** o uso de Mocks, Stubs e Spies
- **Configurar** pipelines de Integração Contínua (CI) no GitHub Actions
- **Interpretar** e otimizar métricas de cobertura de código
- **Gerar** relatórios profissionais em formatos JUnit e JSON
- **Depurar** testes falhos com precisão
- **Estruturar** suites de testes sustentáveis com boas práticas
- **Organizar** testes co-locados junto aos módulos

---

## Tecnologias

| Tecnologias | Descrição |
|---|---|
| **JavaScript (ES6+)** | Linguagem de programação | 
| **Jest 30.x** | Framework de testes | 
| **Babel** | Transpilador para suporte a ES Modules | 
| **Axios** | Cliente HTTP para testes de integração | 
| **GitHub Actions** | Pipeline CI/CD | 
| **Chart.js** | Visualização de dados no dashboard (mantido por substituição futura) | 

---

## Estrutura do Projeto

```
jest-financeiro-testes/
├── src/
│   ├── financeiro/      # Módulo financeiro (src/financeiro)
│   │   ├── financeiro.js
│   │   ├── financeiro.test.js
│   │   └── __snapshots__/
│   ├── pedidos/        # Módulo de pedidos (src/pedidos)
│   │   ├── pedidoService.js
│   │   └── pedidoService.test.js
│   └── basico/        # Testes básicos (src/basico)
├── __tests__/           # Testes de integração/E2E
├── coverage/            # Relatórios de cobertura
├── reports/             # Relatórios JUnit
├── dashboard-server.js # Servidor do dashboard (mantido)
├── dashboard.html       # Interface do dashboard (mantido)
├── jest.config.js      # Configuração do Jest
├── .babelrc            # Configuração do Babel
└── package.json
```

---

## Como executar

> **Pré-requisitos**
>
>- Node.js 24.x ou superior
>- Git

> **Passos**
>
>```bash
>

>>>npm test
>```

---

## Testes

| Tipo | Comando | Descrição |
|---|---|---|
| Todas | `npm test` | Executa todos os testes unitários e de integração |
| Watch | `npm run test:watch` | Execução em modo observador |
| Cobertura | `npm run test:coverage` | Genera relatório de cobertura em `coverage/` |
| CI | `npm run test:ci` | Executa testes com relatório para GitHub Actions |

---

## Status Atual dos Testes

- ✅ **Test Suites:** 6 passed, 6 total
- ✅ **Tests:** 32 passed, 32 total
- ✅ **Cobertura:** 100% em todos os módulos

---

## Cobertura de Testes

O projeto tem uma meta de **90%** de cobertura. Atualmente atingimos **100%** em todos os módulos:

- `financeiroService.js` – 100%
- `relatorioService.js` – 100%
- `pedidoService.js` – 100%

---

## Organização de Testes

### Boas Práticas Adotadas
- **Testes Co-locados:** Arquivos de teste na mesma pasta dos módulos (`src/**/*.test.js`)
- **Describe**: Estrutura clara por função / teste
- **Limpeza de Mocks:** `mockRestore()` após cada teste
- **Testes Independentes:** Sem dependência entre casos de teste
- **Nomes Descritivos:** Nomes claros para funções e testes

### Estrutura de Teste Exemplos

```javascript
describe('Pedido Service', () => {
  describe('calcularTotal', () => { /* unitário */ })
  describe('aplicarDesconto', () => { /* unitário */ })
  describe('gerarNota', () => { /* unitário */ })
  describe('fecharPedido', () => { /* integração */ })
})
```

---

## CI/CD

Pipeline GitHub Actions definido em `.github/workflows/jest.yml`:

- **Evento** : push ou pull request para `main`
- **Ambiente** : Node.js 24.x
- **Execução** : `npm run test:ci`
- **Saídas** : Relatório JUnit, cobertura, logs

---

## Autor

Feito por **Rafael Felipe**. <https://www.linkedin.com/in/rafaelrfelipe/>

---

## Licença

Este projeto está sob a licença **ISC**. Veja o arquivo [LICENSE](LICENSE).

---

<p align="center">Desenvolvido com dedicação estudando testes automatizados</p>
