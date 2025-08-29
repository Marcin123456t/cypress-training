/// <reference types="cypress" />

describe('Dynamic stubbing of GET requests', () => {
  it('returns different responses depending on URL id', () => {
    cy.visit('https://example.cypress.io/commands/network-requests');

    cy.intercept('GET', '**/comments/*', (req) => {
      const id = req.url.split('/').pop();

      if (id === '1') {
        req.reply({
          statusCode: 200,
          body: { id: 1, name: 'QA Bot', body: 'First stubbed comment' }
        });
      } else if (id === '2') {
        req.reply({
          statusCode: 200,
          body: { id: 2, name: 'QA Bot', body: 'Second stubbed comment' }
        });
      } else {
        req.reply({
          statusCode: 200,
          body: { id, name: 'QA Bot', body: 'Fallback stub' }
        });
      }
    }).as('getComment');

    cy.contains('Get Comment').click();

    cy.wait('@getComment').its('response.statusCode').should('eq', 200);

    cy.get('.network-comment')
      .invoke('text')
      .then((text) => {
        const t = text.trim();
        expect(
          /First stubbed comment|Second stubbed comment|Fallback stub/.test(t),
          `unexpected text: "${t}"`
        ).to.be.true;
      });
  });
});
