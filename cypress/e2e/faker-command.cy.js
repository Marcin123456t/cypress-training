/// <reference types="cypress"/>

describe('Random credential with custom command', () => {
    it('fill form with random email and password', () => {
        cy.visit('https://example.cypress.io/commands/actions');

        cy.fillRandomCredentials().then(({ email, password }) => {
            expect(email).to.include('@');
            expect(password.length).to.be.greaterThan(8);
        });
    });
});