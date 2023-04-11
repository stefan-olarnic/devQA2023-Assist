import { getAccessToken } from "./login.cy";
import { getUserProfile } from "./user-profile.cy";

describe("GET user profile endpoint", () => {
  let response;
  it("Verify user can get profile @TC15", () => {
    getAccessToken().then((token) => {
      getUserProfile(token).then((userDetailsResponse) => {
        expect(userDetailsResponse.status).to.equal(200);
        expect(userDetailsResponse.body).to.not.be.null;
      });
    });
  });
});
