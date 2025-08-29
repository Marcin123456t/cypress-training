/// <reference types="cypress" />

describe('Dropdown', () => {
    it('Select option from dropdown', () => {
        cy.visit('https://example.cypress.io/commands/actions');

        cy.get('.action-select')
          .select('apples')
          .should('have.value', 'fr-apples')
    });
});