import { contactUsPage } from "../../pages/contact-us-page.cy";

describe("Verify offer suggestion functionality", () => {
  it.only("Verify that user can successfully offer suggestions", () => {
    cy.visit("https://iwanttohelp.bim.assistcloud.services/");
    const contactPage = new contactUsPage();
    contactPage.navigateToContactPage();
    contactPage.verifyUserIsOnContactPage();
    contactPage.fillInSuggestionForm();
    contactPage.submitForm();
    contactPage.verifyMessageWasSent();
  });
});
