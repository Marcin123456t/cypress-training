/// <reference types="cypress" />

describe('Input in field', () => {
    it('Fill email field', () => {
        cy.visit('https://example.cypress.io/commands/actions');
        cy.get('#email1')
          .type('text@example.pl')
          .should('have.value', 'text@example.pl')
    });
});