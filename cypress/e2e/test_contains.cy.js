/// <reference types="cypress" />

describe('Contain Exemple', () => {
    it('Find element by text', () => {
        cy.visit('https://example.cypress.io');
        cy.contains('type').click();
        cy.url().should('include', '/commands/actions');
    });
});