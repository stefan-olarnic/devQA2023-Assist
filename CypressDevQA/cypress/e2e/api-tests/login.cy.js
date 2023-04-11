function getAccessToken() {
  return cy
    .request({
      method: "POST",
      url: "https://iwanttohelp.bim.assistcloud.services/auth/signin",
      body: {
        auth: {
          phone_number: "0751415238",
          password: "Cristi12345@",
        },
      },
    })
    .then((response) => {
      return response.body.jwt; // extract the JWT token from the response body and return it
    });
}

export { getAccessToken };
