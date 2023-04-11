/// <reference types="cypress" />

// TC1

describe("Header functionality", () => {
  it("Verify that all header's elements navigate to the correct page", () => {
    cy.visit("https://iwanttohelp.bim.assistcloud.services/");
    cy.get('a[href*="/"]').eq(1).click({ force: true });
    cy.url().should("eq", "https://iwanttohelp.bim.assistcloud.services/");

    cy.get('a[href*="/search"').click();
    cy.url().should("contains", "/search");
    cy.get("button.dismissButton").then(($button) => {
      if ($button.is(":visible")) {
        cy.wrap($button).click();
      }
    });
    cy.get('a[href*="/needs_list"').click();
    cy.url().should("contains", "/needs_list");
    cy.get(".mb-1 h3.card-title").should(
      "have.text",
      "Lista nevoi & Cazuri speciale"
    );

    cy.get('a[href*="/about"]').click();
    cy.url().should("contains", "/about");
    cy.get(".mb-5 h3.card-title").should("have.text", "Despre noi");

    cy.get('a[href*="/contact"').click();
    cy.url().should("contains", "/contact");

    cy.get('a[href*="/auth/register"').click();
    cy.url().should("contains", "/auth/register");

    cy.get('a[href*="/auth/login"').eq(1).click();
    cy.url().should("contains", "/auth/login");
    cy.get(".card-header").should("have.text", "Autentificare");
    //The user is able to navigate to each page
  });
});
