/// <reference types="cypress"/>
import { faker } from "@faker-js/faker";
import { ActionsPage } from "../support/pages/action.pageObject";

describe('Page Object example - Actions page', () => {
  const actionsPage = new ActionsPage();

  beforeEach(function () {
    actionsPage.visit();
    cy.fixture('user').as('userData');
    this.randomPassword = faker.internet.password({ length: 12 });
  });

  it('fill form using Page Object', function () {
    actionsPage.fillCredentials(this.userData.email, this.randomPassword);
    expect(this.randomPassword.length).to.be.greaterThan(7);
    actionsPage.submitForm();
    actionsPage.checkSubmitButton();
  });

  it('should detect Submit button is enabled by default', () => {
    actionsPage.isSubmitDisabled().then((disabled) => {
      expect(disabled).to.be.false;
    });
  });

  it('should detect Submit button is disabled after simulation', () => {
    actionsPage.disabledSubmit();

    actionsPage.isSubmitDisabled().then((disabled) => {
      expect(disabled).to.be.true;
    });
  });

  it('should enable Submit button after disabling it', () => {
    actionsPage.disabledSubmit();

    actionsPage.isSubmitDisabled().then((disabled) => {
      expect(disabled).to.be.true;
    });

    actionsPage.enableSubmit();

    actionsPage.isSubmitDisabled().then((disabled) => {
      expect(disabled).to.be.false;
    });
  });
});
