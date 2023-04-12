function getUserRecommendedNeeds(token) {
  return cy.request({
    method: "GET",
    url: "https://iwanttohelp.bim.assistcloud.services/volunteers/api/v1/charts/user_recomended_needs",
    headers: {
      authority: "iwanttohelp.bim.assistcloud.services",
      accept: "application/json",
      "accept-language": "en-US,en;q=0.9",
      "access-control-allow-origin": "*",
      authorization: `Bearer ${token}`,
      "if-none-match": 'W/"dd79cbb963f4c1f906b43433ce448f7e"',
      referer: "https://iwanttohelp.bim.assistcloud.services/dashboard/profile",
    },
  });
}

export { getUserRecommendedNeeds };
