/// <reference types="cypress" />

describe('Network requests - stubbed error', () => {
  it('stubs POST /comments with 500 and validates via alias + minimal UI', () => {
    // 1) Wejście na stronę i sanity-check nagłówka
    cy.visit('https://example.cypress.io/commands/network-requests');
    cy.get('h1', { timeout: 10000 }).should('contain.text', 'Network Requests');

    // 2) Stub POST /comments → 500 (kontrolujemy backend)
    cy.intercept('POST', /\/comments$/, {
      statusCode: 500,
      body: {}
    }).as('postStub');

    // 3) Klik w "Post Comment" po upewnieniu się, że widać przycisk
    cy.contains('Post Comment', { timeout: 10000 })
      .scrollIntoView()
      .should('be.visible')
      .click();

    // 4) Czekamy na alias i asercja statusu (to jest źródło prawdy)
    cy.wait('@postStub', { timeout: 10000 })
      .its('response.statusCode')
      .should('eq', 500);

    // 5) UI: demo nie pokazuje treści dla 500, więc tylko istnienie kontenera
    cy.get('.network-post-comment', { timeout: 10000 })
      .should('exist');
  });
});
