/// <reference types="cypress" />

describe('Button and link interaction', () => {
    it('Click link and check url + header', () => {
        cy.visit('https://example.cypress.io');

        cy.contains('type')
          . click();

        cy.url()
          .should('include' , '/commands/actions');

        cy.get('h1').should('contain.text', 'Actions');
    });
});