export class dashboardPage {
  constructor() {
    this.logoutButton = ":nth-child(9) > .nav-link";
    this.recommendedNeedsPage = ":nth-child(3) > .nav-link > p";
  }
  verifyHomePageIsDisplayed() {
    cy.url().should("contains", "/dashboard");
  }
  clickOnLogoutButton() {
    cy.get(this.logoutButton).should("have.text", " Deconectare ").click();
    cy.wait(2000);
  }
  navigateToRecommendedNeedsPage() {
    cy.get(":nth-child(3) > .nav-link > p").click();
    cy.wait(3000);
  }
  navigateToNeedsPage() {
    cy.get(".nav > :nth-child(2) > .nav-link").click();
  }
  verifyUserIsOnNeedsPage() {
    cy.url().should("contains", "/needs");
    cy.wait(5000);
  }
  verifyInitialNumberOfNeeds() {
    cy.get('i.tim-icons.icon-time-alarm.text-warning')
      .parent('h3.card-title')
      .invoke('text')
      .then((text) => {
        this.numberBefore = parseInt(text.trim()); // Parse the number from the text content
        cy.log(`Initial number: ${this.numberBefore}`);
      });
  }
  
  verifyUpdatedNumberOfNeeds() {
    cy.get('i.tim-icons.icon-time-alarm.text-warning')
      .parent('h3.card-title')
      .invoke('text')
      .then((text) => {
        const numberAfter = parseInt(text.trim());
        expect(numberAfter).to.equal(this.numberBefore + 1);
      });
  }
  
  
}
