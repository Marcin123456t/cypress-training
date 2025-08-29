/// <reference types="cypress" />

describe('Advanced beforeEach test', () => {
    
    beforeEach(() => {
        cy.visit('https://example.cypress.io/commands/actions')
    });

    it('Type email check conditions', () => {
        cy.get('#email1')
          .type('email@example.com')
          .invoke('val')
          .then((val) => {
            expect(val).to.contain('@');
            expect(val).to.match(/\.com$/);
            expect(val.length).to.be.greaterThan(10);
          });
    });

    it('Type password check conditions', () => {
        cy.get('#password1')
          .type('Password1')
          .invoke('val')
          .then((val) => {
            expect(val.length).to.eq(9);
            expect(val.startsWith('Pa')).to.be.true;
            expect(val).not.to.contain(' ');
          });
    });
});
