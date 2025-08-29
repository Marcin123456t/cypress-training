/// <reference types="cypress"/>

import { faker } from "@faker-js/faker";

describe('fixture + Faker example', () => {
    it('uses email from fixture and password from faker', () => {
        cy.visit('https://example.cypress.io/commands/actions');

        cy.fixture('user').then((user) => {
           cy.get('#email1')
             .type(user.email)
             .should('have.value', user.email);

            const password = faker.internet.password({ length: 10});
            cy.get('#password1')
              .type(password)
              .should('have.value', password)

            expect(password.length).to.be.greaterThan(8);
        });
    });
});