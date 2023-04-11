function getUserRecommendedNeeds(token) {
    return cy.request({
        method: "GET",
        url: "https://iwanttohelp.bim.assistcloud.services/volunteers/api/v1/charts/user_recomended_needs",
        headers: {
            'authority': 'iwanttohelp.bim.assistcloud.services',
              'accept': 'application/json',
              'accept-language': 'en-US,en;q=0.9',
              'access-control-allow-origin': '*',
              'authorization': `Bearer ${token}`,
              'if-none-match': 'W/"dd79cbb963f4c1f906b43433ce448f7e"',
              'referer': 'https://iwanttohelp.bim.assistcloud.services/dashboard/profile',
              'sec-ch-ua': '"Google Chrome";v="111", "Not(A:Brand";v="8", "Chromium";v="111"',
              'sec-ch-ua-mobile': '?0',
              'sec-ch-ua-platform': '"Windows"',
              'sec-fetch-dest': 'empty',
              'sec-fetch-mode': 'cors',
              'sec-fetch-site': 'same-origin',
              'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36'
        }
    });
}

export {getUserRecommendedNeeds};
