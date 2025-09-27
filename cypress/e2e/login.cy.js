describe('Page login', () => {
  beforeEach(function () {
    cy.fixture('users').as('usuarios');

    cy.visit('https://front.serverest.dev/login');
  });

  it('login with error', function () {
    cy.get('[data-testid="email"]').type(this.usuarios.client.email);
    cy.get('[data-testid="senha"]').type(this.usuarios.client.password);

    cy.get('[data-testid="entrar"]').click();

    cy.get('.alert > :nth-child(2)');
  });

  it('login with success', function () {
    cy.get('[data-testid="email"]').type(this.usuarios.admin.email);
    cy.get('[data-testid="senha"]').type(this.usuarios.admin.password);

    cy.get('[data-testid="entrar"]').click();

    cy.url().should('include', '/home');
  });
});
