/// <reference types="cypress" />

describe('Stability: timeouts and retries', () => {
  it('navigates without hard waits and asserts with custom timeouts', () => {
    cy.visit('https://example.cypress.io');

    cy.contains('type', { timeout: 10000 })
      .click();

    cy.url()
      .should('include', '/commands/actions');

    cy.get('h1', { timeout: 10000 })
      .should('contain.text', 'Actions');

    cy.get('#email1', { timeout: 10000})
      .should('be.visible')
      .and('not.be.disabled');

      cy.get('#email1')
        .type('stable@example.com', { delay: 0 })
        .should('have.value', 'stable@example.com');
  });
});