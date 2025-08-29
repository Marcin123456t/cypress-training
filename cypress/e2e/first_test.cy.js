/// <reference types="cypress" />

describe('First Test', () => {
  it('Visits the Cypress example page', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('type').click()
    cy.url().should('include', '/commands/actions')
  });
});
