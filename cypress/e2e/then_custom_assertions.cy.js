/// <reference types="cypress" />

describe('Using .then() with custom asertion', () => {
    it('types into input and checks value with expect', () =>{
        cy.visit('https://example.cypress.io/commands/actions');

        cy.get('#email1')
          .type('test@email.com')
          .then(($input) => {
            const val = $input.val();
            expect(val).to.contain('@');
            expect(val).to.match(/\.com$/);
          });
    });
});