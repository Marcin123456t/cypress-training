/// <reference types="cypress"/>

describe('Custom commands + fixture', () => {
    it('logs in using cy.login() with data from user.json', () => {
        cy.visit('https://example.cypress.io/commands/actions');

        cy.fixture('user').then((user) => {
            cy.login(user.email, user.password);
        });
    });
});