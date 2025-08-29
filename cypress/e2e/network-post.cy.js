/// <reference types="cypress" />

describe('Network requests - POST example', () => {
  it('intercepts POST /comments and checks status + UI', () => {
    // 1) wejście na stronę
    cy.visit('https://example.cypress.io/commands/network-requests');
    cy.get('h1', { timeout: 10000 }).should('contain.text', 'Network Requests');

    // 2) intercept POST /comments
    cy.intercept({ method: 'POST', url: /\/comments$/ }).as('postComment');

    // 3) klik w przycisk Post Comment
    cy.contains('Post Comment', { timeout: 10000 })
      .scrollIntoView()
      .should('be.visible')
      .click();

    // 4) czekamy na request i sprawdzamy status
    cy.wait('@postComment', { timeout: 10000 })
      .its('response.statusCode')
      .should('eq', 201);

    // 5) UI potwierdzenie
    cy.get('.network-post-comment', { timeout: 10000 })
      .should('contain.text', 'POST successful!');
  });
});
