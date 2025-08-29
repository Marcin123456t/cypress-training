/// <reference types="cypress" />

describe('Stabilit: anit-patern', () => {
  it.skip('bad habits (expected to be flaky)', () => {
    cy.visit('https://example.cypress.io');

    cy.wait(2000);

        cy.get('ul li:nth-child(3) a').click();

    cy.get('.non-existent-or-hidden-button').click({ force: true });

    cy.get('#email1').then(($el) => {
      expect($el.val()).to.equal('stable@example.com');
    });
  });

  it('good habits (stable version', () => {
    cy.visit('https://example.cypress.io');

    cy.contains('type', { timeout: 10000 })
      .scrollIntoView()
      .should('be.visible')
      .click();

    cy.url().should('include', '/commands/actions');

    cy.get('#email1')
      .should('not.be.disabled')
      .and('be.visible')
      .type('email@example.com', { delay: 0 })
      .should('have.value', 'email@example.com');
  });
});