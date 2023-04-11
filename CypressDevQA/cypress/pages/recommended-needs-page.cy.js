import {
  ADRESS,
  CONTACT_FIRST_NAME,
  CONTACT_PHONE_NUMBER,
  DESCRIPTION,
} from "../support/constants";

export class recommendedNeedsPage {
  constructor() {
    this.table = 'table[role="table"]';
    this.currentRows = 'tbody[role="rowgroup"] > tr[role="row"]';
    this.viewButton = ':nth-child(1) > [aria-colindex="6"] > div > .fa-eye';
    this.trashButton =
      'td[aria-colindex="6"] div > i[title="Sterge"]:not([disabled="disabled"])';
    this.modal = "div.modal-content";
    this.deleteButton = 'button[type="button"].btn-primary';
    this.rowCountBefore = 0;
    this.searchInputField = 'input[name="Filter"].form-control';
    this.recommendedNeedsPage = ":nth-child(3) > .nav-link > p";
    this.mandatoryFieldRequiredError = ".errors > .text-left";
    this.viewNeedTab = "div.col-md-8";
    this.cardStatus = ".card-header > p";
    this.dashboardPage = ":nth-child(1) > .nav-link > p";
  }
  verifySuccesMessageIsDisplayed() {
    cy.contains("Succes!").should("be.visible");
    cy.wait(200);
  }
  navigateToRecommendedNeedsPage() {
    cy.get(this.recommendedNeedsPage).click();
    cy.wait(3000);
  }
  verifyNewRowHasBeenAdded() {
    cy.get(this.table).find(this.currentRows).should("exist");
  }
  verifyInitialNumberOfRows() {
    cy.get(this.table)
      .find("tr")
      .then(($row) => {
        this.rowCountBefore = $row.length - 1;
      })
      .then(() => {
        cy.log(`Initial number of rows: ${this.rowCountBefore}`);
      });
  }
  addNewNeedButton() {
    cy.get(".btn").click();
    cy.wait(1000);
  }
  mandatoryFieldErrorIsDisplayed() {
    cy.get(this.mandatoryFieldRequiredError).should("be.visible");
  }
  verifyUpdatedNumberOfRows() {
    let rowCountBefore, rowCountAfter;
    cy.get(this.table)
      .find("tr")
      .then(($row) => {
        rowCountAfter = $row.length - 1;
      })
      .then(() => {
        expect(rowCountAfter).to.equal(this.rowCountBefore);
      });
  }
  clickOnViewButton() {
    cy.get(this.viewButton).click();
    cy.wait(1000);
    cy.url().should("contains", "/view");
  }
  verifyFormIsProperlyDisplayed() {
    cy.get(this.viewNeedTab).should("be.visible");
    cy.contains("Vizualizare nevoie recomandata").should("exist");
    cy.get(this.cardStatus).eq(0).should("be.visible");
  }
  clickOnTrashButton() {
    cy.get(this.trashButton).first().click();
  }
  viewModalAndDeleteNeed() {
    cy.get(this.modal).should("be.visible");
    cy.get(this.deleteButton).click();
  }
  filterAndSearchByDescription() {
    cy.get(this.searchInputField).as("inputSearch").type(DESCRIPTION);
    cy.get("tr").find(`td:contains('${DESCRIPTION}')`).should("exist");
  }
  filterAndSearchByContact() {
    cy.get("@inputSearch").clear().type(CONTACT_FIRST_NAME);
    cy.get("tr").find(`td:contains('${CONTACT_FIRST_NAME}')`).should("exist");
  }
  filterAndSearchByAdress() {
    cy.get("@inputSearch").clear().type(ADRESS);
    cy.get("tr").find(`td:contains('${ADRESS}')`).should("exist");
  }
  filterAndSearchByPhoneNumber() {
    cy.get("@inputSearch").clear().type(CONTACT_PHONE_NUMBER);
    cy.get("tr").find(`td:contains('${CONTACT_PHONE_NUMBER}')`).should("exist");
  }
  clickOnCloseAlertButton() {
    cy.get(".close").click({ force: true });
  }
  navigateToDashboardPage() {
    cy.get(this.dashboardPage).click();
  }
}
