export class contactUsPage {
  constructor() {
    this.contactPage = 'a[href*="/contact"';
    this.lastName = 'input[name="last_name"]';
    this.email = 'input[name="email"]';
    this.message = 'textarea[name="message"]';
  }
  navigateToContactPage() {
    cy.get(this.contactPage).click();
  }
  verifyUserIsOnContactPage() {
    cy.url().should("contains", "/contact");
  }
  fillInSuggestionForm() {
    cy.get(this.lastName).type("Andrew Smith");
    cy.get(this.email).type("andrew_smith@gmail.com");
    cy.get(this.message).type("lorem ipsum");
  }
  submitForm() {
    cy.get('.btn').click();
  }
  verifyMessageWasSent() {
    cy.get('.alert').contains("Mesajul a fost trimis!");
  }
}
