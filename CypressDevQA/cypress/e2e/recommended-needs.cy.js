/// <reference types="cypress" />

import { goodCredentials } from "../support/constants"
import { authPage } from "../pages/auth-page.cy";
import { dashboardPage } from "../pages/dashboard-page.cy";
import "../support/commands";
import { recommendedNeedsPage } from "../pages/recommended-needs-page.cy";

describe("Verify that 'Nevoi recomandate' page is working accordingly", () => {
  beforeEach(() => {
    cy.visit("https://iwanttohelp.bim.assistcloud.services/auth/login");
  });

  // TC6

  it("Verify that a user is able to add new Nevoie recomandata @TC6", () => {
    const loginPage = new authPage();
    loginPage.enterCredentialsAndLogin(goodCredentials.phoneNumber, goodCredentials.password);
    
    const homePage = new dashboardPage();
    homePage.verifyHomePageIsDisplayed();
    homePage.navigateToRecommendedNeedsPage();

    const individualNeedsPage = new recommendedNeedsPage();
    individualNeedsPage.addNewNeedButton();

    cy.completeForm();
    
    individualNeedsPage.verifySuccesMessageIsDisplayed();
    individualNeedsPage.navigateToRecommendedNeedsPage();
    individualNeedsPage.verifyNewRowHasBeenAdded();
    // A success message is displayed and a new row is added to "Nevoie recomandate" table
  });

  // TC7

  it("Verify that the 'Descriere field' is required @TC7", () => {
    const loginPage = new authPage();
    loginPage.enterCredentialsAndLogin(goodCredentials.phoneNumber, goodCredentials.password);

    const homePage = new dashboardPage();
    homePage.verifyHomePageIsDisplayed();
    homePage.navigateToRecommendedNeedsPage();

    const individualNeedsPage = new recommendedNeedsPage();
    cy.wait(3000);
    //added an additional wait of 3000ms because sometimes due to many needs created it might take longer to load
    individualNeedsPage.verifyInitialNumberOfRows();
    individualNeedsPage.addNewNeedButton();

    cy.completeFormWithoutDescription();
    
    individualNeedsPage.mandatoryFieldErrorIsDisplayed();
    individualNeedsPage.navigateToRecommendedNeedsPage();
    
    individualNeedsPage.verifyUpdatedNumberOfRows();

    // an error message is displayed but how do i verify that no new row is added to nevoie recomandate table
  });

  // TC8

  it("Verify that user is able to use 'Vizualizeaza' functionality @TC8", () => {
    const loginPage = new authPage();
    loginPage.enterCredentialsAndLogin(goodCredentials.phoneNumber, goodCredentials.password);

    const homePage = new dashboardPage();
    homePage.verifyHomePageIsDisplayed();
    homePage.navigateToRecommendedNeedsPage();
    
    const individualNeedsPage = new recommendedNeedsPage();
    individualNeedsPage.addNewNeedButton();

    cy.completeForm();
    
    individualNeedsPage.verifySuccesMessageIsDisplayed();
    individualNeedsPage.navigateToRecommendedNeedsPage();
    individualNeedsPage.clickOnViewButton();
    individualNeedsPage.verifyFormIsProperlyDisplayed();
    //User is able to see all the fields that has been filled in
    // Form's title is properly visible and also it's status
  });

  // TC9

  it("Verify that user is able to use 'Sterge' functionality @TC9", () => {
    const loginPage = new authPage();
    loginPage.enterCredentialsAndLogin(goodCredentials.phoneNumber, goodCredentials.password);

    const homePage = new dashboardPage();
    homePage.verifyHomePageIsDisplayed();
    homePage.navigateToRecommendedNeedsPage();
    
    const individualNeedsPage = new recommendedNeedsPage();
    individualNeedsPage.addNewNeedButton();

    cy.completeForm();

    individualNeedsPage.verifySuccesMessageIsDisplayed();
    individualNeedsPage.navigateToRecommendedNeedsPage();
    individualNeedsPage.clickOnTrashButton();
    individualNeedsPage.viewModalAndDeleteNeed();
    // The user is able to delete the entry
  });

  // TC10

  it("Verify the search functionality @TC10", () => {
    const loginPage = new authPage();
    loginPage.enterCredentialsAndLogin(goodCredentials.phoneNumber, goodCredentials.password);

    const homePage = new dashboardPage();
    homePage.verifyHomePageIsDisplayed();
    homePage.navigateToRecommendedNeedsPage();
    
    const individualNeedsPage = new recommendedNeedsPage();
    individualNeedsPage.addNewNeedButton();

    cy.completeForm();

    individualNeedsPage.verifySuccesMessageIsDisplayed();
    individualNeedsPage.navigateToRecommendedNeedsPage();
    individualNeedsPage.addNewNeedButton();
    
    cy.completeForm();

    individualNeedsPage.verifySuccesMessageIsDisplayed();
    individualNeedsPage.navigateToRecommendedNeedsPage();
    individualNeedsPage.filterAndSearchByDescription();
    individualNeedsPage.filterAndSearchByContact();
    individualNeedsPage.filterAndSearchByAdress();
    individualNeedsPage.filterAndSearchByPhoneNumber();
    // All searches are returning proper values
  });
});
