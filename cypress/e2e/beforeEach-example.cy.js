/// <reference types="cypress" />

describe('Test with beforeEach', () => {

    beforeEach(() => {
        cy.visit('https://example.cypress.io/commands/actions');
    });

    it('Type email check value contains @', () => {
        cy.get('#email1')
          .type('email@example.com')
          .should('have.value', 'email@example.com')
          .invoke('val')
          .and('contain', '@');
    });

    it('Type wrong email and check it does not contain @', () => {
        cy.get('#email1')
          .type('emailexample.com')
          .invoke('val')
          .should('not.contain', '@');
    });

    it('Type coupon code and check length', () => {
        cy.get('#couponCode1')
          .type('12345')
          .should('have.value', '12345')
          .invoke('val')
          .and('have.length', 5);
    });

});
