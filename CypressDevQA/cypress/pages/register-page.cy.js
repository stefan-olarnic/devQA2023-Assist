export class registerPage {
  constructor() {
    this.registerPage = 'a[href*="/auth/register"';
  }
  navigateToRegisterPage() {
    cy.get(this.registerPage).click();
  }
  verifyUserIsOnRegisterPage() {
    cy.url().should("contains", "/auth/register");
  }
}
