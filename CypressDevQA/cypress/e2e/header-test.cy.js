/// <reference types="cypress" />

import { aboutUsPage } from "../pages/about-us-page.cy";
import { authPage } from "../pages/auth-page.cy";
import { contactUsPage } from "../pages/contact-us-page.cy";
import { mainPage } from "../pages/main-page.cy";
import { needsPage } from "../pages/needs-page.cy";
import { registerPage } from "../pages/register-page.cy";
import { topVolunteersPage } from "../pages/top-volunteers-page.cy";

// TC1

describe("Header functionality", () => {
  it("Verify that all header's elements navigate to the correct page @TC1", () => {
    const initialPage = new mainPage();
    cy.visit(Cypress.config("baseUrl"));
    initialPage.navigateToAcasaPage();
    initialPage.verifyUserIsOnMainPage();

    const searchPage = new topVolunteersPage();
    searchPage.navigateToTopVolunteersPage();
    searchPage.verifyUserIsOnTopVolunteersPage();
    searchPage.clickOnDismissButtonIfVisible();

    const needsListPage = new needsPage();
    needsListPage.navigateToNeedsListPage();
    needsListPage.verifyUserIsOnNeedsListPage();

    const aboutPage = new aboutUsPage();
    aboutPage.navigateToAboutUsPage();
    aboutPage.verifyUserIsOnAboutUsPage();

    const contactPage = new contactUsPage();
    contactPage.navigateToContactPage();
    contactPage.verifyUserIsOnContactPage();

    const registrationPage = new registerPage();
    registrationPage.navigateToRegisterPage();
    registrationPage.verifyUserIsOnRegisterPage();

    const loginPage = new authPage();
    loginPage.navigateToAuthPage();
    loginPage.verifyUserIsOnAuthPage();
    //The user is able to navigate to each page
  });
});
