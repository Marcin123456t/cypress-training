/// <reference types="cypress" />

describe('Chainde command example', () => {
    it('types into input, check URL, and submit', () => {
        cy.visit('https://example.cypress.io/commands/actions');

        cy.get('#couponCode1')
          .type('1234567')
          .should('have.value', '1234567');

        cy.url()
          .should('include', '/actions');
        
        cy.contains('Submit')
          .click()

        cy.get('#couponCode1')
          .should('exist');  
        
        cy.get('form.action-form').should('exist');
        
        cy.contains('Submit').should('be.visible');
    });
});