import "../../support/commands";
import { authPage } from "../../pages/auth-page.cy";
import { dashboardPage } from "../../pages/dashboard-page.cy";
import { mainPage } from "../../pages/main-page.cy";
import { needsPage } from "../../pages/needs-page.cy";
import { recommendedNeedsPage } from "../../pages/recommended-needs-page.cy";
import { goodCredentials, secondAccountCredentials } from "../../support/constants";
import { topVolunteersPage } from "../../pages/top-volunteers-page.cy";

describe("Verify Top volunteers are properly displayed", () => {
  beforeEach(() => {
    cy.visit("https://iwanttohelp.bim.assistcloud.services/auth/login");
    const loginPage = new authPage();
    loginPage.enterCredentialsAndLogin(
      goodCredentials.phoneNumber,
      goodCredentials.password
    );

    const homePage = new dashboardPage();
    homePage.verifyHomePageIsDisplayed();
  });

  it("Verify 'Completeaza' functionality @TC18", () => {
    const homePage = new dashboardPage();
    homePage.navigateToRecommendedNeedsPage();

    const individualNeedsPage = new recommendedNeedsPage();
    individualNeedsPage.addNewNeedButton();

    cy.completeForm();
    individualNeedsPage.verifySuccesMessageIsDisplayed();
    individualNeedsPage.clickOnCloseAlertButton();

    homePage.clickOnLogoutButton();

    const initialPage = new mainPage();
    initialPage.navigateToAuthPage();
    initialPage.verifyUserIsOnAuthPage();

    const loginPage = new authPage();
    loginPage.enterCredentialsAndLogin(
      secondAccountCredentials.phoneNumber,
      secondAccountCredentials.password
    );

    homePage.navigateToNeedsPage();
    homePage.verifyUserIsOnNeedsPage();

    const needs = new needsPage();
    needs.filterNeedsByDescription();
    needs.sortNeedsByStatus();
    needs.clickOnApplyButton();
    needs.verifyModalPopUpIsDisplayed();
    needs.clickOnSubmitButton();
    needs.successfullyAppliedNeedAlert();

    cy.reload();

    needs.filterNeedsByDescription();
    needs.clickOnCompleteButton();

    needs.verifyReviewWindowIsDisplayed();
    needs.leaveReview();
    needs.clickOnSubmitButton();
    needs.successfullyCompletedNeedAlert();

    cy.reload();

    homePage.clickOnLogoutButton();

    loginPage.verifyUserIsOnAuthPage();

    const searchPage = new topVolunteersPage();
    searchPage.navigateToTopVolunteersPage();
    searchPage.verifyUserIsOnTopVolunteersPage();
    searchPage.clickOnDismissButtonIfVisible();
    searchPage.searchVolunteerAfterName();
    searchPage.verifyVolunteerIsDisplayed();
  });
});
