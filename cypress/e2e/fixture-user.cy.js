/// <reference types="cypress" />

describe('Fixture example, use login data', () => {
    it('load user data from fixture', () => {
        cy.visit('https://example.cypress.io/commands/actions');

        cy.fixture('user').then((user) => {
            cy.get('#email1')
              .type(user.email)
              .should('have.value', user.email)
            cy.get('#password1')
              .type(user.password)
              .should('have.value', user.password)
        });
    });
});