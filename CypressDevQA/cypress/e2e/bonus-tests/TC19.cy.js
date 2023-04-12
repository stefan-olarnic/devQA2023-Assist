import { contactUsPage } from "../../pages/contact-us-page.cy";

describe("Verify offer suggestion functionality", () => {
  it.only("Verify that user can successfully offer suggestions @TC19", () => {
    cy.visit(Cypress.config("baseUrl"));
    const contactPage = new contactUsPage();
    contactPage.navigateToContactPage();
    contactPage.verifyUserIsOnContactPage();
    contactPage.fillInSuggestionForm();
    contactPage.submitForm();
    contactPage.verifyMessageWasSent();
  });
});
