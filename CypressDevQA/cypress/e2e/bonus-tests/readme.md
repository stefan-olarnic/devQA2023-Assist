TC18 - Top Volunteers - Verify that volunteers are properly displayed on Top Volunteers page after placing a review on needs page

preconditions: at least one need should be already created by a different user

Repro steps:
1. go to https://iwanttohelp.bim.assistcloud.services/auth/login
2. fill in all required fields with valid credentials
3. click on "Autentificare" button
4. navigate to "nevoi" page
5. filter and search into the nevoi page after the description that has been used in preconditions
6. click on "aplica" button and submit
7. click on "completeaza" button
8. leave a review and click on submit button
9. logout
10. navigate to initial page: https://iwanttohelp.bim.assistcloud.services/
11. proceed to "top voluntari" page
12. get into the search field and look for the user that placed the review

expected result:

user that left the review after clicked on completeaza button should be properly displayed

actual result:

User that left the review is properly displayed on "Top Voluntari" page;

TC19 - Verify that user can successfully offer suggestions and its status code

Repro steps:
1. navigate to the main page: https://iwanttohelp.bim.assistcloud.services/
2. proceed to "Ofera Sugestie" page
3. fill in the form with valid data
4. click on submit button

expected results: an alert success message is displayed and server receives 201 status code

actual results:
Success message is properly displayed and server receives 201 status code

TC20 - "Nevoie in asteptare" is properly displayed on dashboard after being created:

1. go to https://iwanttohelp.bim.assistcloud.services/auth/login
2. fill in all required fields with valid credentials
3. click on "Autentificare" button
4. proceed to dashboard check the number of "nevoi in asteptare"
4. navigate to "nevoi recomandate" page
5. create new need
6. navigate to dashboard page
7. notice that "nevoi in asteptare" has properly updated after a new need has been created