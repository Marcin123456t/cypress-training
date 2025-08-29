/// <reference types="cypress" />

describe('Should Example', () => {
    it('Check if element is visible', () => {
        cy.visit('https://example.cypress.io/commands/actions');
        cy.get('#password1')
          .should('be.visible')
          .type('Password123@')
          .should('have.value', 'Password123@');
    });
});