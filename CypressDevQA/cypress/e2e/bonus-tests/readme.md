TC18 - Top Volunteers - Verify that volunteers are properly displayed on Top Volunteers page after placing a review on needs page

preconditions: at least one need should be already created by a different user

Repro steps:
1. Navigate to https://iwanttohelp.bim.assistcloud.services/auth/login
2. fill in all required fields with valid credentials
3. click on "Autentificare" button
4. navigate to "nevoi" page
5. filter and search into the nevoi page after the description that has been used in preconditions
6. click on "aplica" button and submit
7. click on "completeaza" button
8. leave a review and click on submit button
9. click on "Deconectare" button to perform a logout action
10. navigate to initial page: https://iwanttohelp.bim.assistcloud.services/
11. proceed to "top voluntari" page
12. get into the search field and look for the username that placed the review

expected result:

Placed needs reviews by users should be visible on top volunteers page

actual result:

User that placed the review is properly displayed on "Top Voluntari" page;

TC19 - Verify that user can successfully offer suggestions and database provides correct status code

Repro steps:
1. navigate to the main page: https://iwanttohelp.bim.assistcloud.services/
2. proceed to "Ofera Sugestie" page
3. fill in the form with valid data
4. click on "Trimite" button

expected results: an alert success message is displayed and server receives 201 status code

actual results:
Success message is properly displayed and server receives 201 status code

TC20 - Pending needs are properly displayed on dashboard page after a new need was created

Repro steps:
1. go to https://iwanttohelp.bim.assistcloud.services/auth/login
2. fill in all required fields with valid credentials
3. click on "Autentificare" button
4. proceed to dashboard check the number of "nevoi in asteptare"
4. navigate to "nevoi recomandate" page
5. create new need
6. navigate to dashboard page
7. notice that "nevoi in asteptare" has properly updated after a new need has been created

expected result: Pending needs has been properly updated on the dashboard page after a new need has been created by a user

actual result: Pending needs are properly updating after new ones are created