/// <reference types="cypress"/>

import { faker } from "@faker-js/faker";

describe('Fixture + Faker with beforeEach alias', () => {
  beforeEach(function () {
    cy.fixture('user').as('userData');

    this.randomPassword = faker.internet.password({ length: 10 });
  });

  it('fills form with email from fixture and password from faker', function () {
    cy.visit('https://example.cypress.io/commands/actions');

    cy.get('#email1')
      .type(this.userData.email)
      .should('have.value', this.userData.email);

    cy.get('#password1')
      .type(this.randomPassword)
      .should('have.value', this.randomPassword);

    expect(this.randomPassword.length).to.be.greaterThan(7);
  });
});
