/// <reference types="cypress" />

import "../support/commands";
import { ADRESS, CITY, CONTACT_FIRST_NAME, CONTACT_LAST_NAME, CONTACT_PHONE_NUMBER, COUNTY, DESCRIPTION, DETAILS, POSTAL_CODE } from "../support/constants";

describe("Verify that 'Nevoi recomandate' page is working accordingly", () => {

    // TC6
  
    it("Verify that a user is able to add new Nevoie recomandata", () => {
      //pre-conditions  -- user should be already logged in
      cy.visit("https://iwanttohelp.bim.assistcloud.services/auth/login");
      //do i need to provide somewhere as pre-requisites that an account must be created before the login being performed?
      cy.validLogin();
      cy.url().should("contains", "/dashboard");
      cy.get(":nth-child(3) > .nav-link > p").click();
      cy.wait(1000);
      cy.get(".btn").click();
      cy.wait(1000);
      cy.get('input[name="contact_first_name"]').type(CONTACT_FIRST_NAME);
    cy.get('input[name="contact_last_name"]').type(CONTACT_LAST_NAME);
    cy.get('input[name="contact_phone_number"]').type(CONTACT_PHONE_NUMBER);
    cy.get(".vs__search").click();
    //cy.wait(1000);
    cy.contains("Alimente").click();
    cy.get("textarea").type(DESCRIPTION);
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
    cy.get('.btn-primary').click()
    cy.wait(200);
    cy.contains("Succes!").should("be.visible");
    //cy.get('.close').click({force: true})
    cy.wait(200);
    cy.get(":nth-child(3) > .nav-link > p").click();
    });

    it("Verify that the 'Descriere field' is required", () => {
        //pre-conditions  -- user should be already logged in
        cy.visit("https://iwanttohelp.bim.assistcloud.services/auth/login");
        cy.wait(1000);
        //do i need to provide somewhere as pre-requisites that an account must be created before the login being performed?
        cy.validLogin();
        cy.url().should("contains", "/dashboard");
        cy.get(":nth-child(3) > .nav-link > p").click();
        cy.wait(1000);
        cy.get(".btn").click();
        cy.wait(1000);
        cy.completeForm()
        cy.get(".errors > .text-left").should("be.visible");
        // an error message is displayed but how do i verify that no new row is added to nevoie recomandate table
});
});