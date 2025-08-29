/// <reference types="cypress"/>

describe('Alias example - DOM element', () => {
    it('uses alias for email field multiple times', () => {
        cy.visit('https://example.cypress.io/commands/actions');
        
        cy.get('#email1').as('emailField')

        cy.get('@emailField')
          .type('alias@example.pl')
          .should('have.value', 'alias@example.pl');

        cy.get('@emailField')
          .clear()
          .type('email@example.com')
          .should('have.value', 'email@example.com')
    });
});