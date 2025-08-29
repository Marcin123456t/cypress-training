/// <reference types="cypress" />

describe('Multiple network requests with aliases', () => {
  it('waits for GET and POST sequentially', () => {
    cy.visit('https://example.cypress.io/commands/network-requests');

    cy.intercept('GET', '**/comments/*').as('getComment');
    cy.intercept('POST', '**/comments').as('postComment');

    cy.contains('Get Comment').click();
    cy.wait('@getComment').its('response.statusCode').should('eq', 200);

    cy.contains('Post Comment').click();
    cy.wait('@postComment').its('response.statusCode').should('eq', 201);

    cy.get('.network-comment').should('not.be.empty');
    cy.get('.network-post-comment').should('contain.text', 'POST successful!');
  });
});
