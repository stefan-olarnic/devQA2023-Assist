import { body } from "../../support/constants";

// Create a new need
function createNeed(token) {
  return cy.request({
    method: "POST",
    url: "https://iwanttohelp.bim.assistcloud.services/volunteers/api/v1/recommended_needs",
    headers: {
      authority: "iwanttohelp.bim.assistcloud.services",
      accept: "application/json",
      "accept-language": "en-US,en;q=0.9",
      "access-control-allow-origin": "*",
      authorization: `Bearer ${token}`,
      "content-type": "application/json;charset=UTF-8",
      "if-none-match": 'W/"dd79cbb963f4c1f906b43433ce448f7e"',
      origin: "https://iwanttohelp.bim.assistcloud.services",
      referer: "https://iwanttohelp.bim.assistcloud.services/dashboard/profile",
    },
    body: JSON.stringify(body),
  });
}
// Get a specific need by ID
function getNeed(token, needId) {
  return cy.request({
    method: "GET",
    url: `https://iwanttohelp.bim.assistcloud.services/volunteers/api/v1/recommended_needs/${needId}`,
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

// Delete a specific need by ID
function deleteNeed(token, needId) {
  return cy.request({
    method: "DELETE",
    url: `https://iwanttohelp.bim.assistcloud.services/volunteers/api/v1/recommended_needs/${needId}`,
    headers: {
      authority: "iwanttohelp.bim.assistcloud.services",
      accept: "application/json",
      "accept-language": "en-US,en;q=0.9",
      "access-control-allow-origin": "*",
      authorization: `Bearer ${token}`,
      "content-type": "application/json",
      "if-none-match": 'W/"2c5-hnt9hG5W5eLzj4t4f4tC8cYJHn4"',
      origin: "https://iwanttohelp.bim.assistcloud.services",
      referer:
        "https://iwanttohelp.bim.assistcloud.services/dashboard/recommended_needs",
    },
    body: {
      id: needId,
    },
  });
}

export { createNeed, getNeed, deleteNeed };
