/// <reference types="cypress" />

describe('Radiobutton', () => {
    it('Check and uncheck radiobutton', () => {
        cy.visit('https://example.cypress.io/commands/actions');

        cy.get('#optionsRadios1')
        .check()
        .should('be.checked')

        cy.get('#optionsRadios2')
          .should('not.be.checked')

        cy.get('#optionsRadios2')
          .check()
          .should('be.checked')

        cy.get('#optionsRadios1')
          .should('not.be.checked')
    });
});