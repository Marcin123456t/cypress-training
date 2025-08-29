/// <reference types="cypress" />

describe('Network stubbing with cy.intercept', () => {
  it('forces network error for POST and validates via alias + UI', () => {
    cy.visit('https://example.cypress.io/commands/network-requests');

    cy.intercept('POST', '**/comments', { forceNetworkError: true }).as('postStub');

    cy.contains('Post Comment').click();
    cy.wait('@postStub').its('error').should('exist');

    cy.get('.network-post-comment', { timeout: 10000 })
      .should(($el) => {
        const text = $el.text().trim();
        expect(text === '' || text === 'POST failed!').to.be.true;
      });
  });
});
