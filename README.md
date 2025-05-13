Claro! Aqui está o conteúdo completo do `README.md` para você copiar e colar diretamente no seu projeto:

---

```markdown
# 🧪 Testes Automatizados E2E - Base2

Este projeto utiliza **TypeScript**, **Cucumber.js**, **Playwright** e **Gherkin** para testar comportamentos no site [base2.com.br](https://base2.com.br).

---

## ✅ Tecnologias Utilizadas

| Camada                 | Tecnologia                                             | Finalidade                                                    |
|------------------------|--------------------------------------------------------|----------------------------------------------------------------|
| **Linguagem**          | TypeScript                                             | Escrita tipada, moderna e segura para testes                  |
| **Test Runner BDD**    | [Cucumber.js](https://github.com/cucumber/cucumber-js) | Executa cenários `.feature` escritos em Gherkin               |
| **Browser Automation** | [Playwright](https://playwright.dev/)                  | Automatiza testes de navegador com Chromium, Firefox e WebKit |
| **Gherkin**            | Gherkin                                                | Linguagem legível para definir comportamentos (cenários BDD)  |
| **Node.js + npm**      | Node.js                                                | Ambiente de execução e gerenciamento de dependências          |
| **ts-node**            | ts-node                                                | Executa arquivos TypeScript diretamente                       |

---

## 📂 Estrutura do Projeto


test-automation/
├── features/
│   ├── home.feature
│   └── step-definitions/
│       └── home.steps.ts
├── support/
│   └── reports.ts
├── tsconfig.json
├── package.json
└── README.md

---

## ⚙️ Pré-requisitos

- [Node.js](https://nodejs.org/) (recomenda-se a versão 18+)
- npm (gerenciador de pacotes incluso com o Node.js)

---

## 📥 Instalação

1. Clone este repositório ou crie a pasta local:

```bash
git clone <url-do-repo> test-automation
cd test-automation
````

2. Inicialize o projeto:

```bash
npm init -y
```

3. Instale as dependências:

```bash
npm install --save-dev typescript ts-node @cucumber/cucumber playwright
```

4. Instale os navegadores usados pelo Playwright:

```bash
npx playwright install
```

---

## ✍️ Configurações

No `package.json`, adicione:

```json
"scripts": {
  "test": "cucumber-js --require-module ts-node/register --require features/**/*.ts"
}
```

---

## 🚀 Executando os testes

Para rodar os testes, use:

```bash
npm test
```

Feito com 💻 para automação de testes no site da Base2.

