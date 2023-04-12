import {
  CONTACT_FIRST_NAME,
  CONTACT_LAST_NAME,
  CONTACT_PHONE_NUMBER,
  DETAILS,
  COUNTY,
  CITY,
  POSTAL_CODE,
  DESCRIPTION,
  ADRESS,
  ACCOUNT_FIRST_NAME1,
  ACCOUNT_LAST_NAME1,
  ACCOUNT_PHONE1,
  ACCOUNT_EMAIL1,
  ACCOUNT_ADRESS1,
  ACCOUNT_DETAILS1,
  ACCOUNT_COUNTY1,
  ACCOUNT_CITY1,
  ACCOUNT_POSTALCODE1,
  ACCOUNT_PASSWORD1,
  ACCOUNT_CONFIRM_PASSWORD1,
  ACCOUNT_LAST_NAME2,
  ACCOUNT_FIRST_NAME2,
  ACCOUNT_PHONE2,
  ACCOUNT_EMAIL2,
  ACCOUNT_ADRESS2,
  ACCOUNT_DETAILS2,
  ACCOUNT_COUNTY2,
  ACCOUNT_CITY2,
  ACCOUNT_POSTALCODE2,
  ACCOUNT_PASSWORD2,
  ACCOUNT_CONFIRM_PASSWORD2,
} from "./constants";

Cypress.Commands.add("completeForm", () => {
  cy.get('input[name="contact_first_name"]').type(CONTACT_FIRST_NAME);
  cy.get('input[name="contact_last_name"]').type(CONTACT_LAST_NAME);
  cy.get('input[name="contact_phone_number"]').type(CONTACT_PHONE_NUMBER);
  cy.get(".vs__search").click();
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
  cy.get(".btn-primary").click();
});

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
});

Cypress.Commands.add("createFirstAccount", () => {
  cy.get('input[name="first_name"]').type(ACCOUNT_FIRST_NAME1);
  cy.get('input[name="last_name"]').type(ACCOUNT_LAST_NAME1);
  cy.get('input[name="phone_number"]').type(ACCOUNT_PHONE1);
  cy.get('input[name="email"]').type(ACCOUNT_EMAIL1);
  cy.get(".vs__search").click();
  cy.get("#vs1__option-0").click();
  cy.get(".form-control.pac-target-input").type(ACCOUNT_ADRESS1);
  cy.get('input[name="details"]').type(ACCOUNT_DETAILS1);
  cy.get('input[name="county').type(ACCOUNT_COUNTY1);
  cy.get('input[name="city"]').type(ACCOUNT_CITY1);
  cy.get('input[name="postal_code"]').type(ACCOUNT_POSTALCODE1);
  cy.get('input[name="password"]').type(ACCOUNT_PASSWORD1);
  cy.get('input[name="password_confirmation"]').type(ACCOUNT_CONFIRM_PASSWORD1);
  cy.get('button[type="submit"].btn.btn-primary').click();
  cy.url().should("contains", "auth/login");
});

Cypress.Commands.add("createSecondAccount", () => {
  cy.get('input[name="first_name"]').type(ACCOUNT_FIRST_NAME2);
  cy.get('input[name="last_name"]').type(ACCOUNT_LAST_NAME2);
  cy.get('input[name="phone_number"]').type(ACCOUNT_PHONE2);
  cy.get('input[name="email"]').type(ACCOUNT_EMAIL2);
  cy.get(".vs__search").click();
  cy.get("#vs1__option-0").click();
  cy.get(".form-control.pac-target-input").type(ACCOUNT_ADRESS2);
  cy.get('input[name="details"]').type(ACCOUNT_DETAILS2);
  cy.get('input[name="county').type(ACCOUNT_COUNTY2);
  cy.get('input[name="city"]').type(ACCOUNT_CITY2);
  cy.get('input[name="postal_code"]').type(ACCOUNT_POSTALCODE2);
  cy.get('input[name="password"]').type(ACCOUNT_PASSWORD2);
  cy.get('input[name="password_confirmation"]').type(ACCOUNT_CONFIRM_PASSWORD2);
  cy.get('button[type="submit"].btn.btn-primary').click();
  cy.url().should("contains", "auth/login");
});
