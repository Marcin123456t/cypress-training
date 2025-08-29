export class ActionsPage {
    visit() {
        cy.visit('https://example.cypress.io/commands/actions');
    }

    getEmailField() {
        return cy.get('#email1');
    }

    getPasswordField() {
        return cy.get('#password1');
    }

    fillCredentials(email, password) {
        this.getEmailField()
            .type(email)
            .should('have.value', email);
        this.getPasswordField()
            .type(password)
            .should('have.value', password);
    }

    submitForm() {
        cy.contains('Submit', { timeout: 10000 })
          .scrollIntoView()
          .should('be.visible')
          .click();

        cy.get('.action-form')
          .should('exist')
          .and('be.visible');
    }

    checkSubmitButton() {
        cy.contains('Submit')
          .should('exist')
          .and('be.visible')
          .and('be.enabled')
          .and('contain.text', 'Submit');
    }

    isSubmitDisabled() {
        return cy.contains('Submit').invoke('prop', 'disabled');
    }

    disabledSubmit() {
        cy.contains('Submit').invoke('prop', 'disabled', true);
    }

    enableSubmit() {
        cy.contains('Submit').invoke('removeAttr', 'disabled');
    }
}