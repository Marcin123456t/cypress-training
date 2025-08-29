/// <reference types="cypress" />

describe('Negative coupon code flow', () => {
    it('Try to submit with too short coupon code', () => {
        cy.visit('https://example.cypress.io/commands/actions');

        cy.get('#couponCode1')
          .type('12')
          .should('have.value', '12')
          .invoke('val')
          .should('have.length.lessThan', 5);

        cy.contains('Submit')
          .click();

        cy.get('.action-form')
          .should('exist')
          .and('be.visible');
    });
});