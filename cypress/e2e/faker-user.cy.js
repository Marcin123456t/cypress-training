/// <reference types="cypress"/>

import { faker } from "@faker-js/faker";

describe('Dynamic data with faker', () => {
    it('generate random email and password and fill the form', () => {
        const email = faker.internet.email();
        const password = faker.internet.password();

        cy.visit('https://example.cypress.io/commands/actions');

        cy.get('#email1')
          .type(email)
          .should('have.value', email);

        cy.get('#password1')
          .type(password)
          .should('have.value', password);
    })
})