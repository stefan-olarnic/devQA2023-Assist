export class mainPage {
  constructor() {
    this.acasaPage = 'a[href*="/"]';
    this.topVoluntariPage = 'a[href*="/search"';
    this.dismissButton = "button.dismissButton";
    this.authentificationPage = ":nth-child(7) > .nav-link";
  }
  verifyUserIsOnMainPage() {
    cy.url().should("eq", "https://iwanttohelp.bim.assistcloud.services/");
  }
  navigateToAcasaPage() {
    cy.get(this.acasaPage).eq(1).click({ force: true });
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
  navigateToAuthPage() {
    cy.get(this.authentificationPage).click();
  }
  verifyUserIsOnAuthPage() {
    cy.url().should("contains", "/auth/login");
  }
}
