/// <reference types="cypress" />

import "../support/commands";
import {
  ADRESS,
  CITY,
  CONTACT_FIRST_NAME,
  CONTACT_LAST_NAME,
  CONTACT_PHONE_NUMBER,
  COUNTY,
  DESCRIPTION,
  DETAILS,
  POSTAL_CODE,
} from "../support/constants";

describe("Verify that 'Nevoi recomandate' page is working accordingly", () => {
  beforeEach(() => {
    cy.visit("https://iwanttohelp.bim.assistcloud.services/auth/login");
    cy.validLogin();
    cy.url().should("contains", "/dashboard");
  });

  // TC6

  it("Verify that a user is able to add new Nevoie recomandata", () => {
    cy.get(":nth-child(3) > .nav-link > p").click();
    cy.wait(1000);
    cy.get(".btn").click();
    cy.wait(1000);
    cy.completeForm();
    cy.contains("Succes!").should("be.visible");
    cy.wait(200);
    cy.get(":nth-child(3) > .nav-link > p").click();
    cy.get('table[role="table"]')
      .find('tbody[role="rowgroup"] > tr[role="row"]')
      .should("exist");
    // A success message is displayed and a new row is added to "Nevoie recomandate" table
  });

  // TC7

  it.only("Verify that the 'Descriere field' is required", () => {
    let rowCountBefore, rowCountAfter;
    cy.get(":nth-child(3) > .nav-link > p").click();
    cy.wait(3000);
    cy.get('table[role="table"]')
      .find("tr")
      .then(($row) => {
        rowCountBefore = $row.length - 1;
      });
    cy.get(".btn").click();
    cy.wait(1000);
    cy.get('input[name="contact_first_name"]').type(CONTACT_FIRST_NAME);
    cy.get('input[name="contact_last_name"]').type(CONTACT_LAST_NAME);
    cy.get('input[name="contact_phone_number"]').type(CONTACT_PHONE_NUMBER);
    cy.get(".vs__search").click();
    cy.contains("Alimente").click();
    cy.get(".pac-target-input").type(ADRESS);
    cy.get("button.dismissButton").then(($button) => {
      if ($button.is(":visible")) {
        cy.wrap($button).click();
      }
    });
    cy.get('input[name="details"]').type(DETAILS);
    cy.get('input[name="county"]').type(COUNTY);
    cy.get('input[name="city"]').type(CITY);
    cy.get('input[name="postal_code"]').type(POSTAL_CODE);
    cy.get(".btn-primary").click();
    cy.wait(200);
    cy.get(".errors > .text-left").should("be.visible");
    cy.get(":nth-child(3) > .nav-link > p").click();
    cy.wait(3000);
    cy.get('table[role="table"]')
      .find("tr")
      .then(($row) => {
        rowCountAfter = $row.length - 1;
      })
      .then(() => {
        expect(rowCountAfter).to.equal(rowCountBefore);
      });

    // an error message is displayed but how do i verify that no new row is added to nevoie recomandate table
  });

  // TC8

  it("Verify that user is able to use 'Vizualizeaza' functionality", () => {
    cy.get(":nth-child(3) > .nav-link > p").click();
    cy.wait(1000);
    cy.get(".btn").click();
    cy.wait(1000);
    cy.completeForm();
    cy.contains("Succes!").should("be.visible");
    cy.get(":nth-child(3) > .nav-link > p").click();
    cy.wait(1000);
    cy.get(':nth-child(1) > [aria-colindex="6"] > div > .fa-eye').click();
    cy.wait(1000);
    cy.url().should("contains", "/view");
    cy.get("div.col-md-8").should("be.visible");
    //User is able to see all the fields that has been filled in
    cy.contains("Vizualizare nevoie recomandata").should("exist");
    cy.get(".card-header > p").eq(0).should("be.visible");
    // Form's title is properly visible and also it's status
  });

  // TC9

  it("Verify that user is able to use 'Sterge' functionality", () => {
    cy.get(":nth-child(3) > .nav-link > p").click();
    cy.wait(1000);
    cy.get(".btn").click();
    cy.wait(1000);
    cy.completeForm();
    cy.contains("Succes!").should("be.visible");
    cy.wait(200);
    cy.get(":nth-child(3) > .nav-link > p").click();
    cy.wait(1000);
    cy.get(
      'td[aria-colindex="6"] div > i[title="Sterge"]:not([disabled="disabled"])'
    )
      .first()
      .click();
    cy.get("div.modal-content").should("be.visible");
    cy.get('button[type="button"].btn-primary').click();
    // The user is able to delete the entry
  });

  // TC10

  it("Verify the search functionality", () => {
    cy.get(":nth-child(3) > .nav-link > p").click();
    cy.wait(1000);
    cy.get('button[type="submit"].btn-primary').click();
    cy.wait(1000);
    cy.completeForm();
    cy.contains("Succes!").should("be.visible");
    cy.wait(200);
    cy.get(":nth-child(3) > .nav-link > p").click();
    cy.wait(200);
    cy.get('button[type="submit"].btn-primary').click();
    cy.wait(1000);
    cy.completeForm();
    cy.contains("Succes!").should("be.visible");
    cy.wait(200);
    cy.get(":nth-child(3) > .nav-link > p").click();
    cy.get('input[name="Filter"].form-control')
      .as("inputSearch")
      .type(DESCRIPTION);
    cy.get("tr").find(`td:contains('${DESCRIPTION}')`).should("exist");
    cy.get("@inputSearch").clear().type(CONTACT_FIRST_NAME);
    cy.get("tr").find(`td:contains('${CONTACT_FIRST_NAME}')`).should("exist");
    cy.get("@inputSearch").clear().type(ADRESS);
    cy.get("tr").find(`td:contains('${ADRESS}')`).should("exist");
    cy.get("@inputSearch").clear().type(CONTACT_PHONE_NUMBER);
    cy.get("tr").find(`td:contains('${CONTACT_PHONE_NUMBER}')`).should("exist");
    // All searches are returning proper values
  });
});
