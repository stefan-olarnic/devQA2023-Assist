import { goodCredentials, badCredentials } from "../support/constants"
import { authPage } from "../pages/auth-page.cy";
import { dashboardPage } from "../pages/dashboard-page.cy"
import { mainPage } from "../pages/main-page.cy";

describe("Verify login functionality", () => {
  beforeEach(() => {
    cy.visit("https://iwanttohelp.bim.assistcloud.services/auth/login");
  });

  // TC4

  it("Verify that Login functionality works with valid credentials @TC4", () => {
    const loginPage = new authPage();
    loginPage.enterCredentialsAndLogin(goodCredentials.phoneNumber, goodCredentials.password);
    
    const homePage = new dashboardPage();
    homePage.verifyHomePageIsDisplayed();
    // The user should be properly logged in
  });

  // TC5

  it("Verify that Login functionality works with invalid credentials @TC5", () => {
    const loginPage = new authPage();
    loginPage.enterCredentialsAndLogin(badCredentials.phoneNumber, badCredentials.password);
    loginPage.verifyAlertIsDisplayed();
    loginPage.verifyUserIsOnAuthPage();
    // An error message is displayed and the user remains on the same page
  });

  // TC14

  it("Verify that user is able to properly logout @TC14", () => {
    //do i need to provide somewhere as pre-requisites that an account must be created before the login being performed?
    const loginPage = new authPage();
    loginPage.enterCredentialsAndLogin(goodCredentials.phoneNumber, goodCredentials.password);
    
    const homePage = new dashboardPage();
    homePage.verifyHomePageIsDisplayed();
    homePage.clickOnLogoutButton();
    
    const initialPage = new mainPage();
    initialPage.verifyUserIsOnMainPage();
    // User is properly logged out and redirected to the main page
  });
  //User is properly loged in into the application, first visible page should be dashboard
});
