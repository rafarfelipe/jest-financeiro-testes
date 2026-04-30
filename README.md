# Jest Financeiro Testes

![GitHub repo size](https://img.shields.io/github/repo-size/rafarfelipe/jest-financeiro-testes)
![GitHub last commit](https://img.shields.io/github/last-commit/rafarfelipe/jest-financeiro-testes)
![GitHub license](https://img.shields.io/github/license/rafarfelipe/jest-financeiro-testes)
![Jest](https://img.shields.io/badge/Jest-30.3.0-99424f?logo=jest)
![Node](https://img.shields.io/badge/Node-24.x-339933?logo=node.js)

> Repositório dedicado ao estudo e prática de testes automatizados com Jest, focando em aplicações financeiras e integração contínua.

---

## Indice

- [Sobre](#sobre)
- [Aprendizados](#aprendizados)
- [Tecnologias](#tecnologias)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Como executar](#como-executar)
- [Testes](#testes)
- [CI/CD](#cicd)
- [Autor](#autor)

---

## Sobre

Este repositório reúne estudos praticos de testes automatizados utilizando **Jest**. O foco e dominar desde testes unitarios basicos ate configuracoes avancadas de cobertura e integracao continua com GitHub Actions.

O projeto simula cenarios reais com modulos de **financas** e **pedidos**, permitindo praticar testes de integracao com APIs externas e mocks.

### API Utilizada

Os testes de integracao sao realizados contra a API do [Barriga React](https://barrigareact.wcaquino.me/), uma aplicacao de controle financeiro utilizada para testes e aprendizado.

---

## Aprendizados

Durante o desenvolvimento deste projeto, foram absorvidos os seguintes conceitos:

- Criar testes unitarios do zero com Jest
- Dominar o uso de Mocks, Stubs e Spies
- Configurar pipelines de Integracao Continua (CI) no GitHub Actions
- Interpretar e otimizar metricas de cobertura de codigo
- Gerar relatorios profissionais em formatos JUnit e JSON
- Debugar testes falhos com precisao
- Estruturar suites de testes sustentaveis

---

## Tecnologias

As seguintes ferramentas foram usadas na construcao do projeto:

- **JavaScript (ES6+)**
- **Jest 30.x** - Framework de testes
- **Babel** - Transpilador para suporte a ES Modules
- **Axios** - Cliente HTTP para testes de integracao
- **GitHub Actions** - CI/CD

---

## Estrutura do Projeto

```
jest-financeiro-testes/
├── src/
│   ├── basico/           # Testes basicos (calculadora, matchers)
│   ├── financeiro/       # Modulo financeiro e testes de integracao
│   └── pedidos/         # Modulo de pedidos e servicos
├── .github/
│   └── workflows/       # Pipeline CI/CD
├── jest.config.js        # Configuracao do Jest
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

### Cobertura de Testes
O projeto mantem uma meta de **90% de cobertura** em linhas de codigo, conforme configurado em `jest.config.js`.

---

## CI/CD

O projeto possui integracao continua configurada via **GitHub Actions**.

- Arquivo: `.github/workflows/jest.yml`
- Executa automaticamente em push e pull requests para `main`
- Node.js 24.x
- Instala dependencias e executa todos os testes

---

## Autor

Feito por Rafael Felipe.

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/rafarfelipe)

---

## Licenca

Este projeto esta sob a licenca **ISC**. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<p align="center">Desenvolvido com dedicacao estudando testes automatizados</p>
