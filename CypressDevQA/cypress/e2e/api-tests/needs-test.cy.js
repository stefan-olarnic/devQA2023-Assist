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
    let createdNeed;
    createNeed(token)
      .then((response) => {
        expect(response.status).to.equal(201);
        createdNeed = response.body.need;
        return getNeed(token, createdNeed.id);
      })
      .then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body.need).to.deep.equal(createdNeed);
        return deleteNeed(token, createdNeed.id);
      })
      .then((response) => {
        expect(response.status).to.equal(204);
      });
  });
  
});
