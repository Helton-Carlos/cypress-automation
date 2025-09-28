describe('Page home', () => {
  beforeEach(function () {
    cy.fixture('users').then((usuarios) => {
      this.usuarios = usuarios;

      cy.visit('https://front.serverest.dev/login');
      cy.get('[data-testid="email"]').type(this.usuarios.admin.email);
      cy.get('[data-testid="senha"]').type(this.usuarios.admin.password);
      cy.get('[data-testid="entrar"]').click();
    });
  });

  it('URL home', function () {
    cy.url().should('include', '/home');
  });

  it('Should test search error', function () {
    cy.get('[data-testid="pesquisar"]').type('camisa');
    cy.get('[data-testid="botaoPesquisar"]').click();

    cy.get('p').contains('Nenhum produto foi encontrado');
  });

  it('Should test search sucess', function () {
    cy.get('[data-testid="pesquisar"]').type('Luxurious Plastic Fish');
    cy.get('[data-testid="botaoPesquisar"]').click();
    cy.get('.card').contains('Luxurious Plastic Fish');
  });

  it('Should test search get all', function () {
    cy.get('[data-testid="pesquisar"]').type('Luxurious');
    cy.get('[data-testid="botaoPesquisar"]').click();
    cy.get('.card').should('have.length', 3);
  });
});
