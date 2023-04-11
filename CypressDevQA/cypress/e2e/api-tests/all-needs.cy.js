// Create a new need
function createNeed(token) {
    const body = {
      "contact_first_name": "kjkj",
      "contact_last_name": "kjkj",
      "contact_phone_number": "kjkj",
      "category": "food",
      "description": "kjkj",
      "address": {
        "street_name": "kjkj",
        "details": "kjkj",
        "county": "kjkj",
        "city": "kjkj",
        "postal_code": "02304"
      }
    };
    
    return cy.request({
      method: "POST",
      url: "https://iwanttohelp.bim.assistcloud.services/volunteers/api/v1/recommended_needs",
      headers: {
        'authority': 'iwanttohelp.bim.assistcloud.services',
        'accept': 'application/json',
        'accept-language': 'en-US,en;q=0.9',
        'access-control-allow-origin': '*',
        'authorization': `Bearer ${token}`,
        'content-type': 'application/json;charset=UTF-8',
        'if-none-match': 'W/"dd79cbb963f4c1f906b43433ce448f7e"',
        'origin': 'https://iwanttohelp.bim.assistcloud.services',
        'referer': 'https://iwanttohelp.bim.assistcloud.services/dashboard/profile',
        'sec-ch-ua': '"Google Chrome";v="111", "Not(A:Brand";v="8", "Chromium";v="111"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36'
      },
      body: JSON.stringify(body)
    });
  };
// Get a specific need by ID
function getNeed(token, needId) {
  return cy.request({
    method: "GET",
    url: `https://iwanttohelp.bim.assistcloud.services/volunteers/api/v1/recommended_needs/${needId}`,
    headers: {
      'authority': "iwanttohelp.bim.assistcloud.services",
      'accept': "application/json",
      "accept-language": "en-US,en;q=0.9",
      "access-control-allow-origin": "*",
      'authorization': `Bearer ${token}`,
      "if-none-match": 'W/"dd79cbb963f4c1f906b43433ce448f7e"',
      'referer': "https://iwanttohelp.bim.assistcloud.services/dashboard/profile",
      "sec-ch-ua":
        '"Google Chrome";v="111", "Not(A:Brand";v="8", "Chromium";v="111"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"Windows"',
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "user-agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36",
    },
  });
}

// Delete a specific need by ID
function deleteNeed(token, needId) {
  return cy.request({
    method: "DELETE",
    url: `https://iwanttohelp.bim.assistcloud.services/volunteers/api/v1/recommended_needs/${needId}`,
    headers: {
      'authority': "iwanttohelp.bim.assistcloud.services",
      'accept': "application/json",
      "accept-language": "en-US,en;q=0.9",
      "access-control-allow-origin": "*",
      'authorization': `Bearer ${token}`,
      "content-type": "application/json",
      "if-none-match": 'W/"2c5-hnt9hG5W5eLzj4t4f4tC8cYJHn4"',
      'origin': "https://iwanttohelp.bim.assistcloud.services",
      'referer':
        "https://iwanttohelp.bim.assistcloud.services/dashboard/recommended_needs",
      "sec-ch-ua":
        '"Google Chrome";v="111", "Not(A:Brand";v="99", "Chromium";v="111"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"Windows"',
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "user-agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36",
    },
    body: {
      id: needId,
    },
  });
}

export { createNeed, getNeed, deleteNeed };

