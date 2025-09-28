describe('Page cadastrarusuarios', () => {
  beforeEach(function () {
    cy.fixture('users').as('usuarios');

    cy.visit('https://front.serverest.dev/cadastrarusuarios');
  });

  it('URL cadastrarusuarios', function () {
    cy.url().should('include', '/cadastrarusuarios');
  });

  it('register with error', function () {
    cy.get('[data-testid="nome"]').type(this.usuarios.adminerror.name);
    cy.get('[data-testid="email"]').type(this.usuarios.adminerror.email);
    cy.get('[data-testid="password"]').type(this.usuarios.adminerror.password);

    cy.get('[data-testid="cadastrar"]').click();

    cy.get('.alert > :nth-child(2)');
  });

  it('register with success', function () {
    cy.get('[data-testid="nome"]').type(this.usuarios.admin.name);
    cy.get('[data-testid="email"]').type(this.usuarios.admin.email);
    cy.get('[data-testid="password"]').type(this.usuarios.admin.password);

    cy.get('[data-testid="cadastrar"]').click();

    cy.url().should('include', '/home');
  });
});
