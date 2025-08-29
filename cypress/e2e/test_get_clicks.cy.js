/// <reference types="cypress" />

describe('Get and click Submit', () => {
    it('Find a button and click it', () => {
        cy.visit('https://example.cypress.io/commands/actions');
        cy.get('#submit').click();
    });
});