/// <reference types="cypress" />

import "../support/commands";
import {
  COMMENT,
  DESCRIPTION,
  SECOND_NR_TEL,
  SECOND_PASSWORD,
} from "../support/constants";

describe("'Nevoie recomandate page'", () => {
  beforeEach(() => {
    cy.visit("https://iwanttohelp.bim.assistcloud.services/auth/login");
  });

  // TC 11

  it("Verify that the user is able to use 'Vizualizeaza' functionality", () => {
    cy.validLogin();
    cy.url().should("contains", "/dashboard");
    cy.get(":nth-child(3) > .nav-link > p").click();
    cy.wait(1000);
    cy.get(".btn").click();
    cy.wait(1000);
    cy.completeForm();
    cy.contains("Succes!").should("be.visible");
    cy.wait(200);
    cy.get(".close").click({ force: true });
    cy.get(":nth-child(9) > .nav-link").click();
    cy.wait(200);
    cy.get(":nth-child(7) > .nav-link").click();
    cy.url().should("contains", "/auth/login");
    cy.get('input[name="phone_number"]').type(SECOND_NR_TEL);
    cy.get('input[name="password"]').type(SECOND_PASSWORD);
    cy.get('button[type="submit"]').click();
    cy.wait(2000);
    cy.get(".nav > :nth-child(2) > .nav-link").click();
    cy.url().should("contains", "/needs");
    cy.wait(5000);
    cy.get(':nth-child(1) > [aria-colindex="5"] > div > .fa-eye').click();
    cy.get(".col-md-8").should("be.visible");
    cy.get("div.card-header h5.title").should(
      "have.text",
      " Vizualizare nevoie "
    );
    cy.get(".card-header > p").should("be.visible");
    // User is able to see all the fields that has been filled in &
    // Form has the intended title: Vizualizare nevoie and status is also properly displayed
  });

  // TC12

  it("Verify 'Aplica' functionality", () => {
    cy.validLogin();
    cy.url().should("contains", "/dashboard");
    cy.get(":nth-child(3) > .nav-link > p").click();
    cy.wait(1000);
    cy.get(".btn").click();
    cy.wait(1000);
    cy.completeForm();
    cy.contains("Succes!").should("be.visible");
    cy.wait(200);
    cy.get(".close").click({ force: true });
    cy.get(":nth-child(9) > .nav-link").click();
    cy.wait(200);
    cy.get(":nth-child(7) > .nav-link").click();
    cy.url().should("contains", "/auth/login");
    cy.get('input[name="phone_number"]').type(SECOND_NR_TEL);
    cy.get('input[name="password"]').type(SECOND_PASSWORD);
    cy.get('button[type="submit"]').click();
    cy.wait(2000);
    cy.get(":nth-child(2) > .nav-link > p").click();
    cy.get('input[name="Filter"].form-control')
      .as("inputSearch")
      .type(DESCRIPTION);
    cy.wait(1000);
    cy.get(
      'td[aria-colindex="5"] div > i[title="Aplica"]:not([disabled="disabled"])'
    )
      .first()
      .click();
    cy.get(".modal-content")
      .contains("Aplica pentru aceasta nevoie")
      .should("be.visible");
    //pop-up is properly displayed
    cy.get(".btn-primary").click();
    cy.get(".alert").contains("Succes!").should("be.visible");
    // When the user clicks on the button a pop-up is properly displayed &
    // User has properly applied for a need
  });

  // TC13

  it("Verify 'Completeaza' functionality", () => {
    cy.validLogin();
    cy.url().should("contains", "/dashboard");
    cy.get(":nth-child(3) > .nav-link > p").click();
    cy.wait(1000);
    cy.get(".btn").click();
    cy.wait(1000);
    cy.completeForm();
    cy.contains("Succes!").should("be.visible");
    cy.wait(200);
    cy.get(".close").click({ force: true });
    cy.get(":nth-child(9) > .nav-link").click();
    cy.wait(200);
    cy.get(":nth-child(7) > .nav-link").click();
    cy.url().should("contains", "/auth/login");
    cy.get('input[name="phone_number"]').type(SECOND_NR_TEL);
    cy.get('input[name="password"]').type(SECOND_PASSWORD);
    cy.get('button[type="submit"]').click();
    cy.wait(2000);
    cy.get(":nth-child(2) > .nav-link > p").click();
    cy.get('input[name="Filter"].form-control')
      .as("inputSearch")
      .type(DESCRIPTION);
    cy.wait(1000);
    cy.get('tr th[aria-colindex="4"]')
      .should("have.attr", "aria-sort", "none")
      .click()
      .invoke("attr", "aria-sort")
      .then((ariaSort) => {
        if (ariaSort === "ascending" || ariaSort === "none") {
          cy.get('tr th[aria-colindex="4"]')
            .click() // click again to change the sorting order to "descending"
            .should("have.attr", "aria-sort", "descending"); // verify that aria-sort is now "descending"
        } else {
          cy.get('tr th[aria-colindex="4"]').should(
            "have.attr",
            "aria-sort",
            "descending"
          ); // verify that aria-sort is already "descending"
        }
      });
    cy.get(
      ':nth-child(1) > [aria-colindex="5"] > div > .fa-user-check'
    ).click();
    cy.get(".modal-content")
      .contains("Aplica pentru aceasta nevoie")
      .should("be.visible");
    cy.get(".btn-primary").click();
    cy.get(".alert").contains("Succes!").should("be.visible");
    cy.wait(1000);
    cy.reload();
    cy.get("@inputSearch").type(DESCRIPTION);
    cy.get(
      'td[aria-colindex="5"] div > i[title="Completeaza"]:not([disabled="disabled"])'
    )
      .first()
      .click();
    cy.get("div.modal-content").should("be.visible");
    cy.get("div.vue-star-rating span:nth-child(5)").click();
    cy.get("textarea.review-comment").type(COMMENT);
    cy.get(".btn-primary").click();
    cy.get(".alert").contains("Succes!").should("be.visible");
    cy.wait(1000);
    cy.reload();
    cy.get("@inputSearch").type(DESCRIPTION);
    cy.wait(2000);
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
  });
});
