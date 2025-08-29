/// <reference types="cypress" />

describe('Network requests - GET (diagnostic)', () => {
  it('intercepts GET /comments/{id} and asserts status + DOM', () => {
    cy.visit('https://example.cypress.io/commands/network-requests');

    // 1) Upewnij się, że jesteś na właściwej stronie
    cy.get('h1', { timeout: 10000 })
      .should('contain.text', 'Network Requests');

    // 2) Intercept z REGEX-em (łapie np. .../comments/1, /comments/123)
    cy.intercept(
      { method: 'GET', url: /\/comments\/\d+$/ }
    ).as('getComment');

    // 3) Klik — najpierw przewiń i upewnij się, że widać
    cy.contains('Get Comment', { timeout: 10000 })
      .scrollIntoView()
      .should('be.visible')
      .click();

    // 4) Czekaj na request (dłuższy timeout na wszelki wypadek) i zaloguj szczegóły
    cy.wait('@getComment', { timeout: 10000 }).then((interception) => {
      cy.log('METHOD: ' + interception.request.method);
      cy.log('URL: ' + interception.request.url);
      cy.log('STATUS: ' + interception.response.statusCode);
      expect(interception.response.statusCode).to.equal(200);
    });

    // 5) UI powinno mieć treść komentarza
    cy.get('.network-comment', { timeout: 10000 })
      .invoke('text')
      .then((t) => expect(t.trim()).to.not.equal(''));
  });
});
