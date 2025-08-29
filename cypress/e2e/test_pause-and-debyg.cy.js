/// <reference types="cypress" />

describe('Debug and screenshots example', () => {
  it('logs, debugs and takes screenshots', () => {
    cy.visit('https://example.cypress.io/commands/actions')

    cy.get('#couponCode1')
      .type('HELLO-CYPRESS')
      .should('have.value', 'HELLO-CYPRESS')
      .then(($input) => {
        cy.log('Typed value: ' + $input.val());
      });

    cy.get('#couponCode1').debug();

    cy.screenshot('full-page');

    cy.get('#couponCode1').screenshot('coupon-input');
  })
})
