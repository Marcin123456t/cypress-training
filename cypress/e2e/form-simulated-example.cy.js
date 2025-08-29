/// <reference types="cypress" />

describe('Simulated form flow', () => {
    it('Fill fields and submit', () => {
        cy.visit('https://example.cypress.io/commands/actions');

        cy.get('#email1')
          .type('email@example.com')
          .should('have.value', 'email@example.com');

        cy.get('#password1')
          .type('Password123@')
          .should('have.value', 'Password123@');

        cy.get('[value="checkbox1"]')
          .check()
          .should('be.checked');

        cy.get('.action-select')
          .select('apples')
          .should('have.value', 'fr-apples');

        cy.contains('Submit')
          .click();

        cy.get('.action-form')
          .should('exist')
          .and('be.visible');
    });
});