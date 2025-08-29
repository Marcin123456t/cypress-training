/// <reference types="cypress" />

describe('checkbox', () => {
    it('Check anf uncheck checkbox', () => {
        cy.visit('https://example.cypress.io/commands/actions')

        cy.get('[type="checkbox"]')
          .first()
          .check()
          .should('be.checked');

        cy.get('[type="checkbox"]')
          .first()
          .uncheck()
          .should('not.be.checked')
    });
});