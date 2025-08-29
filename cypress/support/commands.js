// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (email, password) => {
    cy.get('#email1')
      .type(email)
      .should('have.value', email);

    cy.get('#password1')
      .type(password)
      .should('have.value', password);
});

import { faker } from "@faker-js/faker";

Cypress.Commands.add('fillRandomCredentials', () => {
  const email = faker.internet.email();
  const password = faker.internet.password({ length: 12 });

  cy.get('#email1')
    .clear()
    .type(email)
    .should('have.value', email)

  cy.get('#password1')
    .clear()
    .type(password)
    .should('have.value', password);

  return cy.wrap({ email, password }, { log: false });
});