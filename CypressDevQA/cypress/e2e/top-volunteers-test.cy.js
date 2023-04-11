import { mainPage } from "../pages/main-page.cy";
import { topVolunteersPage } from "../pages/top-volunteers-page.cy";

describe("Top Voluntari page functionality", () => {
  beforeEach(() => {
    cy.visit("https://iwanttohelp.bim.assistcloud.services/");
  })

  // TC2

  it('Verify that on "Top Voluntari" page the map and at least one volunteer is displayed @TC2', () => {
    const initialPage = new mainPage();
    initialPage.navigateToTopVolunteersPage();
    initialPage.verifyUserIsOnTopVolunteersPage();
    initialPage.clickOnDismissButtonIfVisible();

    const searchPage = new topVolunteersPage();
    searchPage.verifyMapElementIsDisplayed();
    searchPage.verifyVolunteerElementIsDisplayed();
    //Both Map element and at least once Volunteer element are displayed
  });

  // TC3

  it("Verify the user is able to Zoom in or out the map @TC3", () => {
    const initialPage = new mainPage();
    initialPage.navigateToTopVolunteersPage();
    initialPage.clickOnDismissButtonIfVisible();

    const searchPage = new topVolunteersPage();
    searchPage.verifyZoomInOutFunctionality();
    //The user can properly zoom in or out the map
  });
});
