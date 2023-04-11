export class authPage {
    constructor() {
      this.phoneNumberInputField = 'input[name="phone_number"]';
      this.passwordInputField = 'input[name="password"]';
      this.submitButton = 'button[type="submit"]';
      this.authPage = 'a[href*="/auth/login"';
    }
     enterCredentialsAndLogin(phoneNumber, password) {
      cy.get(this.phoneNumberInputField).type(phoneNumber);
      cy.get(this.passwordInputField).type(password);
      cy.get(this.submitButton).click();
      cy.wait(2000);
    }
    verifyAlertIsDisplayed() {
      cy.get(".alert").should("be.visible");
    }
    verifyUserIsOnAuthPage() {
      cy.url().should("contains", "/auth/login");
      cy.get(".card-header").should("have.text", "Autentificare");
    }
    navigateToAuthPage() {
        cy.get(this.authPage).eq(1).click();
      }
  }
  