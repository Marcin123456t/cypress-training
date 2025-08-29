/// <reference types="cypress" />

describe('Stability: waiting for network', () => {
  it('uses cy.intercept and cy.wait for a GET request', () => {
    cy.visit('https://example.cypress.io/commands/network-requests');

    cy.intercept('GET', '**/comments/*').as('getComment');

    cy.contains('Get Comment').click();

    cy.wait('@getComment').its('response.statusCode').should('eq', 200);

    cy.get('.network-comment').should('contain.text', 'laudantium');
  });

  it('uses cy.intercept and cy.wait for a POST request', () => {
    cy.visit('https://example.cypress.io/commands/network-requests');

    cy.intercept('POST', '**/comments').as('postComment');

    cy.contains('Post Comment').click();

    cy.wait('@postComment').its('response.statusCode').should('eq', 201);

    cy.get('.network-post-comment').should('contain.text', 'POST successful!');
  });
});
