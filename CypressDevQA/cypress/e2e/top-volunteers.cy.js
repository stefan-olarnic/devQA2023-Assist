describe("Top Voluntari page functionality", () => {
  it('Verify that on "Top Voluntari" page the map and at least one volunteer is displayed', () => {
    cy.visit("https://iwanttohelp.bim.assistcloud.services/");
    cy.get('a[href*="/search"').click();
    cy.url().should("contains", "/search");
    cy.get("button.dismissButton").then(($button) => {
      if ($button.is(":visible")) {
        cy.wrap($button).click();
      }
    });
    cy.get("#search-map").should("be.visible");
    cy.get(".card-volunteer").should("have.length.at.least", 1);
    //Both Map element and at least once Volunteer element are displayed
  });

  it("Verify the user is able to Zoom in or out the map", () => {
    cy.visit("https://iwanttohelp.bim.assistcloud.services/search");
    cy.get("button.dismissButton").then(($button) => {
      if ($button.is(":visible")) {
        cy.wrap($button).click();
      }
    });
    cy.get('[aria-label="Zoom in"]').click();
    cy.wait(1000);
    cy.get('[aria-label="Zoom out"]').click().click();
    //The user can properly zoom in or out the map
  });
});
