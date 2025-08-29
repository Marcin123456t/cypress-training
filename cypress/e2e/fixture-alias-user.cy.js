/// <reference types="cypress"/>

describe('Fixture alias example - user login data', () => {
    beforeEach(() => {
        cy.fixture('user').as('userData');
    });

    it('uses fixture alias to fill email and password fields', function () {
        cy.visit('https://example.cypress.io/commands/actions');

        cy.get('#email1')
          .type(this.userData.email)
          .should('have.value', this.userData.email);

        cy.get('#password1')
          .type(this.userData.password)
          .should('have.value', this.userData.password);
    });
});