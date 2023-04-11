export class topVolunteersPage {
  constructor() {
    this.topVoluntariPage = 'a[href*="/search"';
    this.dismissButton = "button.dismissButton";
    this.zoomInButton = '[aria-label="Zoom in"]';
    this.zoomOutButton = '[aria-label="Zoom out"]';
    this.searchVolunteerInputField = 'input[name="filter"]';
    this.volunteerCardName = 'div.details.mt-2 h4';
  }
  navigateToTopVolunteersPage() {
    cy.get(this.topVoluntariPage).click();
  }
  verifyUserIsOnTopVolunteersPage() {
    cy.url().should("contains", "/search");
  }
  clickOnDismissButtonIfVisible() {
    cy.get(this.dismissButton).then(($button) => {
      if ($button.is(":visible")) {
        cy.wrap($button).click();
      }
    });
  }
  verifyMapElementIsDisplayed() {
    cy.get("#search-map").should("be.visible");
  }
  verifyVolunteerElementIsDisplayed() {
    cy.get(".card-volunteer").should("have.length.at.least", 1);
  }
  verifyZoomInOutFunctionality() {
    cy.get(this.zoomInButton).click();
    cy.wait(1000);
    cy.get(this.zoomOutButton).click().click();
  }
  searchVolunteerAfterName() {
    cy.get(this.searchVolunteerInputField).type('aaa')
  }
  verifyVolunteerIsDisplayed() {
    cy.contains(this.volunteerCardName, 'aaa')
  }
}