export class aboutUsPage {
  constructor() {
    this.aboutUsPage = 'a[href*="/about"]';
    this.headerCardTitle = ".mb-5 h3.card-title";
  }
  navigateToAboutUsPage() {
    cy.get(this.aboutUsPage).click();
  }
  verifyUserIsOnAboutUsPage() {
    cy.url().should("contains", "/about");
    cy.get(this.headerCardTitle).should("have.text", "Despre noi");
  }
}
