/// <reference types="cypress"/>

import { faker } from "@faker-js/faker";

describe('Negative test with faker data', () => {
  it('fills form with invalid email and too short password', () => {
    cy.visit('https://example.cypress.io/commands/actions');

    const invalidEmail = 'emailexample.com';
    cy.get('#email1')
      .type(invalidEmail)
      .should('have.value', invalidEmail)
      .and('not.have.value', '@');

    const shortPassword = faker.internet.password({ length: 6 });
    cy.get('#password1')
      .type(shortPassword)
      .should('have.value', shortPassword)
      .then((val) => {
        expect(val.length).to.be.lessThan(8);
      });
  });
});
