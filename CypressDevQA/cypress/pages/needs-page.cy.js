import { COMMENT, DESCRIPTION } from "../support/constants";

export class needsPage {
  constructor() {
    this.needsPage = 'a[href*="/needs_list"';
    this.headerCardTitle = ".mb-1 h3.card-title";
    this.viewButton = ':nth-child(1) > [aria-colindex="5"] > div > .fa-eye';
    this.viewNeedTab = ".col-md-8";
    this.cardTitle = "div.card-header h5.title";
    this.cardStatus = ".card-header > p";
    this.searchInputField = 'input[name="Filter"].form-control';
    this.enabledApplyButton =
      'td[aria-colindex="5"] div > i[title="Aplica"]:not([disabled="disabled"])';
    this.sortByStatusButton = 'tr th[aria-colindex="4"]';
    this.enabledCompleteButton =
      'td[aria-colindex="5"] div > i[title="Completeaza"]:not([disabled="disabled"])';
    this.fiveStarsRating = "div.vue-star-rating span:nth-child(5)";
  }
  navigateToNeedsListPage() {
    cy.get(this.needsPage).click();
  }
  verifyUserIsOnNeedsListPage() {
    cy.url().should("contains", "/needs_list");
    cy.get(this.headerCardTitle).should(
      "have.text",
      "Lista nevoi & Cazuri speciale"
    );
  }
  clickOnViewButton() {
    cy.get(this.viewButton).click();
  }
  verifyViewTabIsDisplayed() {
    cy.get(this.viewNeedTab).should("be.visible");
  }
  verifyTitleAndStatusIsDisplayed() {
    cy.get(this.cardTitle).should("have.text", " Vizualizare nevoie ");
    cy.get(this.cardStatus).should("be.visible");
  }
  filterNeedsByDescription() {
    cy.get(this.searchInputField).as("inputSearch").type(DESCRIPTION);
    cy.wait(2000);
  }
  clickOnApplyButton() {
    cy.get(this.enabledApplyButton).first().click();
  }
  verifyModalPopUpIsDisplayed() {
    cy.get(".modal-content")
      .contains("Aplica pentru aceasta nevoie")
      .should("be.visible");
  }
  clickOnSubmitButton() {
    cy.get(".btn-primary").click();
  }
  successfullyAppliedNeedAlert() {
    cy.get(".alert").contains("Succes!").should("be.visible");
    cy.wait(1000);
  }
  sortNeedsByStatus() {
    cy.get(this.sortByStatusButton)
      .should("have.attr", "aria-sort", "none")
      .click()
      .invoke("attr", "aria-sort")
      .then((ariaSort) => {
        if (ariaSort === "ascending" || ariaSort === "none") {
          cy.get(this.sortByStatusButton)
            .click() // click again to change the sorting order to "descending"
            .should("have.attr", "aria-sort", "descending"); // verify that aria-sort is now "descending"
        } else {
          cy.get(this.sortByStatusButton).should(
            "have.attr",
            "aria-sort",
            "descending"
          ); // verify that aria-sort is already "descending"
        }
      });
  }
  clickOnCompleteButton() {
    cy.get(this.enabledCompleteButton).first().click();
  }
  verifyReviewWindowIsDisplayed() {
    cy.get("div.modal-content").should("be.visible");
  }
  leaveReview() {
    cy.get(this.fiveStarsRating).click();
    cy.get("textarea.review-comment").type(COMMENT);
  }
  successfullyCompletedNeedAlert() {
    cy.get(".alert").contains("Succes!").should("be.visible");
    cy.wait(1000);
  }
  verifyOnlyViewButtonIsEnabled() {
    cy.get('td[data-label="Actiuni"]')
      .first()
      .within(() => {
        // Select the first i element that is not disabled
        cy.get('i:not([disabled="disabled"])')
          .first()
          .should("have.attr", "title", "Vizualizeaza")
          .should("be.visible");
        // The user can properly finalize a need &
        // Only "Vizualizeaza" functionality is enabled.
      });
  }
}
