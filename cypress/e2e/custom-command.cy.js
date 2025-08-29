/// <reference types="cypress"/>

describe('Custom command example', () => {
    it('castom command use to fill email and password', () => {
        cy.visit('https://example.cypress.io/commands/actions');

        cy.login('email@example.com', 'Password!1')
    });
});