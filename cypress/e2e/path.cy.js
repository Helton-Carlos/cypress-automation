describe('URL path', () => {
  beforeEach(function () {
    cy.fixture('users').then((usuarios) => {
      this.usuarios = usuarios;

      cy.visit('https://front.serverest.dev/login');
      cy.get('[data-testid="email"]').type(this.usuarios.admin.email);
      cy.get('[data-testid="senha"]').type(this.usuarios.admin.password);
      cy.get('[data-testid="entrar"]').click();
    });
  });

  it('path: home', function () {
    cy.url().should('include', '/home');
  });

  it('path: minhaListaDeProdutos', function () {
    cy.get('[data-testid="lista-de-compras"]').click();
    cy.url().should('include', '/minhaListaDeProdutos');
  });

  it('path: carrinho', function () {
    cy.get('[data-testid="carrinho"]').click();
    cy.url().should('include', '/carrinho');
  });
});
