describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.grupomedcof.com.br/');
  });
});

describe('Validação do elemento "Área do Aluno"', () => {
  it('deve encontrar e validar o span com o texto "Área do Aluno"', () => {
    cy.visit('https://www.grupomedcof.com.br/home/');
    
    // Verifica se o span com a classe e texto especificados está visível
    cy.get('span.font-mona.text-base.font-semibold.leading-none.text-white')
      .should('be.visible')
      .and('contain.text', 'Área do Aluno');
  });
});
describe('Abrir pagina de login', () => {
  it('deve abrir a página e inserir dados de login ', () => {
    // Abre a página inicial
    cy.visit('https://www.grupomedcof.com.br/home/');

    // Define o tamanho da janela, se necessário
    cy.viewport(974, 1032);

    // Clique no elemento com a classe .w-9
    cy.get('.w-9').click();

    // Clique no elemento com a classe .xl\\3Aleading-none
    cy.get('.xl\\3Aleading-none').click();

    // Clique no link de texto "Aulas" e aguarde o redirecionamento
    cy.contains('Aulas').click({ force: true });

    // Verifique se a URL mudou para a página de login
    cy.url().should('include', 'https://login.medcof.com.br/');

    // Verifique se a página de "Criar conta!" foi carregada corretamente
    cy.url().should('include', '/auth/register');
  });
});
describe('Teste de Login', () => {

  before(() => {
    // Configuração inicial: abrir a página inicial e navegar até a página de login
    cy.visit('https://www.grupomedcof.com.br/home/');

    // Define o tamanho da janela, se necessário
    cy.viewport(974, 1032);

    // Clique no elemento com a classe .w-9
    cy.get('.w-9').click();

    // Clique no elemento com a classe .xl\\3Aleading-none
    cy.get('.xl\\3Aleading-none').click();

    // Clique no link de texto "Aulas" e aguarde o redirecionamento
    cy.contains('Aulas').click({ force: true });

    // Verifique se a URL mudou para a página de login
    cy.url().should('include', 'https://login.medcof.com.br/');
    cy.url().should('include', '/auth/register');
  });

  it('Deve preencher e enviar o formulário de login', () => {
    // Ação: Preencher o formulário de login
    cy.get('input[name="username"]').type('teste@teste.com.br');
    cy.get('input[name="password"]').type('teste123');
    
    // Ação: Enviar o formulário
    cy.get('button[type="Entrar"]').click();
  });

  it('Deve verificar se o login foi não foi bem-sucedido', () => {
    // Validação: Verificar se uma mensagem de Senha inválida
    cy.get('.welcome-message').should('contain', 'Senha inválida');
  });

});

