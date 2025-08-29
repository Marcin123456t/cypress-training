/// <reference types="cypress" />

describe('Positive coupon code flow', () => {
    it('Try to submit coupon code', () => {
        cy.visit('https://example.cypress.io/commands/actions');

        cy.get('#couponCode1')
          .type('12345')
          .should('have.value', '12345')
          .invoke('val')
          .should('have.length', 5);

        cy.contains('Submit')
          .click();

        cy.get('.action-form')
          .should('exist')
          .and('be.visible');
    });
});