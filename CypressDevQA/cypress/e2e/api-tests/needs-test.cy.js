import { getAccessToken } from "./login.cy";
import { createNeed, getNeed, deleteNeed } from "./all-needs.cy";

describe("Create, get, and delete a need", () => {
  let createdNeedId;
  let token;
  before(() => {
    getAccessToken().then((accessToken) => {
      token = accessToken;
    });
  });

  it("Verify user can create/get/delete need @TC17", () => {
    createNeed(token).then((response) => {
      expect(response.status).to.equal(201);
      createdNeedId = response.body.need.id;
      cy.log(createdNeedId);
      getNeed(token, createdNeedId).then((response) => {
        expect(response.status).to.equal(200);
        deleteNeed(token, createdNeedId).then((response) => {
          expect(response.status).to.equal(204);
        });
      });
    });
  });
});
