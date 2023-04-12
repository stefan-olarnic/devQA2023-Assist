import "../../support/commands";

const { registerPage } = require("../../pages/register-page.cy");

describe("Creating two fresh necessary accounts for running other tests if a database wipe was done", () => {
  beforeEach(() => {
    cy.visit(Cypress.config("baseUrl"));
    const registrationPage = new registerPage();
    registrationPage.navigateToRegisterPage();
    registrationPage.verifyUserIsOnRegisterPage();
  });
  it("Creates first account", () => {
    cy.createFirstAccount();
  });
  it("Creates second account", () => {
    cy.createSecondAccount();
  });
});

// Basically created that two accounts that I've been using throughout other tests
// An automated test is not required for this, it's nice to have only if the database has a periodic scheduled wipe
