/// <reference types="cypress" />

describe('Password', () => {
    it('Type password and check length', () => {
        cy.visit('https://example.cypress.io/commands/actions')
          .get('#password1')
          .type('Password123$')
          .should('have.value', 'Password123$')
          .invoke('val')
          .should('have.length', 12);
    });
});