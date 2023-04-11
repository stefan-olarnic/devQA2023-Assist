export class aboutUsPage {
    constructor() {
        this.aboutUsPage = 'a[href*="/about"]';
    }
    navigateToAboutUsPage() {
        cy.get(this.aboutUsPage).click()
      }
      verifyUserIsOnAboutUsPage() {
        cy.url().should("contains", "/about");
        cy.get(".mb-5 h3.card-title").should("have.text", "Despre noi");
      }
}