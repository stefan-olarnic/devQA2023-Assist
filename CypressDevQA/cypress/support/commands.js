import {
  LOGIN_NR_TEL,
  LOGIN_PASSWORD,
  CONTACT_FIRST_NAME,
  CONTACT_LAST_NAME,
  CONTACT_PHONE_NUMBER,
  DETAILS,
  COUNTY,
  CITY,
  POSTAL_CODE,
  DESCRIPTION,
  ADRESS,
} from "./constants";



Cypress.Commands.add("validLogin", () => {
  cy.get('input[name="phone_number"]').type(LOGIN_NR_TEL);
  cy.get('input[name="password"]').type(LOGIN_PASSWORD);
  cy.get('button[type="submit"]').click();
  cy.wait(2000);
});

  // ...
  Cypress.Commands.add("completeForm", () => {
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
    //cy.wait(200);
  })

  Cypress.Commands.add("completeFormWithoutDescription", () => {
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
  })

//cy.get("#__BVID__23").type(LOGIN_NR_TEL);
//cy.get("#__BVID__25").type(LOGIN_PASSWORD);
