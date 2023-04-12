import { authPage } from "../../pages/auth-page.cy";
import { dashboardPage } from "../../pages/dashboard-page.cy";
import { recommendedNeedsPage } from "../../pages/recommended-needs-page.cy";
import { goodCredentials } from "../../support/constants";
import "../../support/commands";

describe('Verify that the number of "Nevoie in asteptare" on dashboard is properly displayed', () => {
  it('Verify that "Nevoie in asteptare" is properly updated on dashboard page @TC20', () => {
    cy.visit(Cypress.config("baseUrl") + "auth/login");
    const loginPage = new authPage();
    loginPage.enterCredentialsAndLogin(
      goodCredentials.phoneNumber,
      goodCredentials.password
    );

    const homePage = new dashboardPage();
    homePage.verifyInitialNumberOfNeeds();
    homePage.navigateToRecommendedNeedsPage();

    const individualNeedsPage = new recommendedNeedsPage();
    individualNeedsPage.addNewNeedButton();

    cy.completeForm();

    individualNeedsPage.verifySuccesMessageIsDisplayed();
    individualNeedsPage.clickOnCloseAlertButton();
    individualNeedsPage.navigateToDashboardPage();

    homePage.verifyUpdatedNumberOfNeeds();
  });
});
