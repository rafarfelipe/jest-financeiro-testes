# 🃏 Jest Financeiro Testes

![GitHub repo size](https://img.shields.io/github/repo-size/rafarfelipe/jest-financeiro-testes)
![GitHub last commit](https://img.shields.io/github/last-commit/rafarfelipe/jest-financeiro-testes)
![GitHub license](https://img.shields.io/github/license/rafarfelipe/jest-financeiro-testes)
![Jest](https://img.shields.io/badge/Jest-30.3.0-99424f?logo=jest)
![Node](https://img.shields.io/badge/Node-24.x-339933?logo=node.js)

> Repositório dedicado ao estudo e prática de testes automatizados com Jest, focando em aplicações financeiras e integração contínua.

---

## 📋 Índice

- [Sobre](#-sobre)
- [Aprendizados](#-aprendizados)
- [Tecnologias](#-tecnologias)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Como executar](#-como-executar)
- [Testes](#-testes)
- [CI/CD](#-cicd)
- [Autor](#-autor)

---

## 🎯 Sobre

Este repositório reúne estudos práticos de testes automatizados utilizando **Jest**. O foco é dominar desde testes unitários básicos até configurações avançadas de cobertura e integração contínua com GitHub Actions.

O projeto simula cenários reais com módulos de **finanças** e **pedidos**, permitindo praticar testes de integração com APIs externas e mocks.

---

## 📚 Aprendizados

Durante o desenvolvimento deste projeto, foram absorvidos os seguintes conceitos:

- ✅ Criar testes unitários do zero com Jest
- ✅ Dominar o uso de Mocks, Stubs e Spies
- ✅ Configurar pipelines de Integração Contínua (CI) no GitHub Actions
- ✅ Interpretar e otimizar métricas de cobertura de código
- ✅ Gerar relatórios profissionais em formatos JUnit e JSON
- ✅ Debugar testes falhos com precisão
- ✅ Estruturar suítes de testes sustentáveis

---

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- **JavaScript (ES6+)**
- **Jest 30.x** - Framework de testes
- **Babel** - Transpilador para suporte a ES Modules
- **Axios** - Cliente HTTP para testes de integração
- **GitHub Actions** - CI/CD

---

## 📁 Estrutura do Projeto

```
jest-financeiro-testes/
├── src/
│   ├── basico/           # Testes básicos (calculadora, matchers)
│   ├── financeiro/       # Módulo financeiro e testes de integração
│   └── pedidos/         # Módulo de pedidos e serviços
├── .github/
│   └── workflows/       # Pipeline CI/CD
├── jest.config.js        # Configuração do Jest
├── .babelrc             # Configuração do Babel
└── package.json
```

---

## 🚀 Como executar

### Pré-requisitos
- Node.js 24.x ou superior
- Git

### Passos

```bash
# Clone o repositório
git clone git@github.com:rafarfelipe/jest-financeiro-testes.git

# Acesse a pasta
cd jest-financeiro-testes

# Instale as dependências
npm install

# Execute os testes
npm test
```

---

## 🧪 Testes

### Executar todos os testes
```bash
npm test
```

### Executar em modo watch
```bash
npm run test:watch
```

### Gerar relatório de cobertura
```bash
npm run test:coverage
```

### Cobertura de Testes
O projeto mantém uma meta de **90% de cobertura** em linhas de código, conforme configurado em `jest.config.js`.

---

## ⚙️ CI/CD

O projeto possui integração contínua configurada via **GitHub Actions**.

- Arquivo: `.github/workflows/jest.yml`
- Executa automaticamente em push e pull requests para `main`
- Node.js 24.x
- Instala dependências e executa todos os testes

---

## 👤 Autor

Feito por Rafael Felipe!

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/rafarfelipe)

---

## 📝 Licença

Este projeto está sob a licença **ISC**. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<p align="center">Desenvolvido com dedicação estudando testes automatizados 🚀</p>
