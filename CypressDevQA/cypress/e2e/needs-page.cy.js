/// <reference types="cypress" />

import { authPage } from "../pages/auth-page.cy";
import { dashboardPage } from "../pages/dashboard-page.cy";
import { mainPage } from "../pages/main-page.cy";
import { needsPage } from "../pages/needs-page.cy";
import { recommendedNeedsPage } from "../pages/recommended-needs-page.cy";
import "../support/commands";
import {
  goodCredentials,
  secondAccountCredentials,
} from "../support/constants";

describe("'Nevoie recomandate page'", () => {
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

  // TC 11

  it("Verify that the user is able to use 'Vizualizeaza' functionality @TC11", () => {
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
    needs.clickOnViewButton();
    needs.verifyViewTabIsDisplayed();
    needs.verifyTitleAndStatusIsDisplayed();
    // User is able to see all the fields that has been filled in &
    // Form has the intended title: Vizualizare nevoie and status is also properly displayed
  });

  // TC12

  it("Verify 'Aplica' functionality @TC12", () => {
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
    needs.clickOnApplyButton();
    needs.verifyModalPopUpIsDisplayed();
    //pop-up is properly displayed
    needs.clickOnSubmitButton();
    needs.successfullyAppliedNeedAlert();
    // When the user clicks on the button a pop-up is properly displayed &
    // User has properly applied for a need
  });

  // TC13

  it("Verify 'Completeaza' functionality @TC13", () => {
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

    needs.filterNeedsByDescription();
    needs.verifyOnlyViewButtonIsEnabled();
  });
});