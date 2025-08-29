/// <reference types="cypress"/>

describe('Alias example - intercept request', () => {
    it('uses alias for GET request and validates response + UI', () => {
        cy.visit('https://example.cypress.io/commands/network-requests');
        cy.get('h1', { timeout: 10000 })
          .should('contain.text', 'Network Requests');

        cy.intercept('GET', '**/comments/*').as('getComment');

        cy.contains('Get Comment', { timeout: 10000 })
          .scrollIntoView()
          .should('be.visible')
          .click();

        cy.wait('@getComment', { timeout: 10000 })
          .its('response.statusCode')
          .should('eq', 200);

        cy.get('.network-comment')
          .should('not.be.empty');
    });
});