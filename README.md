# Projeto de Testes Automatizados com Cypress

Este projeto utiliza o [Cypress](https://www.cypress.io/) para automação de testes end-to-end em aplicações web. O objetivo é garantir a qualidade e o funcionamento das principais funcionalidades do sistema de forma automatizada.

## Estrutura do Projeto

- `cypress/e2e/`: Contém os testes end-to-end.
- `cypress/fixtures/`: Dados de apoio para os testes.
- `cypress/support/`: Comandos customizados e configurações globais.
- `cypress/downloads/`: Pasta para arquivos baixados durante os testes.
- `cypress.config.js`: Configuração do Cypress.
- `package.json`: Gerenciamento de dependências e scripts.

## Instalação

1. Clone o repositório.
2. Instale as dependências:
   npm run cy:open:chrome

```sh
npm install
```

## Para testes específicos no navegador Chrome

```sh
npm run cy:open:chrome
```

```sh
npm run cy:run:chrome
```
