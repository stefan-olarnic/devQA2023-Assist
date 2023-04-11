export class topVolunteersPage {
  constructor() {
    this.topVoluntariPage = 'a[href*="/search"';
    this.dismissButton = "button.dismissButton";
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
    cy.get('[aria-label="Zoom in"]').click();
    cy.wait(1000);
    cy.get('[aria-label="Zoom out"]').click().click();
  }
  searchVolunteerAfterName() {
    cy.get('input[name="filter"]').type('aaa')
  }
  verifyVolunteerIsDisplayed() {
    cy.contains('div.details.mt-2 h4', 'aaa')
  }
}