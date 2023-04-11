import { getAccessToken } from "./login.cy";
import { getUserRecommendedNeeds } from "./recommended-needs.cy";

describe("GET all recommended needs endpoint", () => {
  it('Verify that "all recommended needs" endpoint is working properly', () => {
    getAccessToken().then((token) => {
      getUserRecommendedNeeds(token).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).to.not.be.null;
      });
    });
  });
});
