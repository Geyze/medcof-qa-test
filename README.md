# medcof-qa-test
Repositório para testes de QA

# Cypress Test Suite for Grupo Medcof

## Descrição

Este repositório contém uma suíte de testes automatizados utilizando Cypress para a aplicação web do Grupo Medcof. Os testes cobrem a navegação inicial, validação de elementos específicos e o fluxo de login.

## Estrutura dos Testes

### Testes Inclusos

1. **Teste de Navegação Inicial**
   - **Descrição**: Verifica se a página inicial carrega corretamente.
   - **Localização**: `cypress/e2e/grupomed_test_spec.cy.js`

2. **Validação do Elemento "Área do Aluno"**
   - **Descrição**: Garante que o elemento `span` com o texto "Área do Aluno" esteja visível na página inicial.
   - **Localização**: `cypress/e2e/grupomed_test_spec.cy.js``

3. **Teste de Acesso à Página de Login**
   - **Descrição**: Testa o fluxo de navegação até a página de login e verifica se a URL está correta.
   - **Localização**: `cypress/e2e/grupomed_test_spec.cy.js`

4. **Teste de Login**
   - **Descrição**: Realiza o login na aplicação e verifica se a mensagem de erro de senha inválida aparece quando as credenciais são incorretas.
   - **Localização**: `cypress/e2e/grupomed_test_spec.cy.js`

**Teste de Login
O teste de login possui um erro conhecido. Atualmente, ele verifica se a mensagem de erro de "Senha inválida" é exibida quando as credenciais fornecidas são incorretas. No entanto, o teste deveria verificar se o e-mail fornecido não está associado a uma conta ativa, para garantir que a aplicação informe adequadamente quando um e-mail não registrado tentar fazer login.

**Problema Identificado
Problema Atual: O teste apenas valida se a senha está incorreta, não verificando se o e-mail está associado a uma conta ativa.
Comportamento Esperado: O teste deve verificar se o sistema exibe uma mensagem indicando que o e-mail não está registrado, em vez de apenas validar a senha.

**Ação Requerida
Atualizar o Teste: Ajustar o teste para que ele valide se o e-mail fornecido não está associado a uma conta ativa, e verificar se a mensagem de erro correta é exibida para e-mails não registrados.

## Como Executar os Testes

### Pré-requisitos

- [Node.js](https://nodejs.org/) (recomendado: versão LTS)
- [Cypress](https://www.cypress.io/)

### Instalar Dependências

Para instalar as dependências do projeto, execute:

```bash
npm install

