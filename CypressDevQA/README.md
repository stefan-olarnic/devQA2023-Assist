# CypressDevQA2023 - Assist

The main test cases for initial components can be found inside the e2e file<br>
The other tests for API requests and that 3 bonus testcases can also be found inside the e2e directory under some personalized files like: api-tests and bonus-tests<br>
I have also created a file inside the e2e directory named databaseAccountReset which can be ran each time after a database wipe was performed to properly create the accounts on the webpage. Accounts that are used for running a big part of the initial test cases<br>

Please make sure you have git and node.js installed<br>
Clone this repository locally<br>
Navigate to CypressInternship folder and run command "npm install cypress@latest"<br>
In order to run the example test, use the command "npm run cy:run" to run cypress headless or "npm run cy:open" to run cypress headed<br>
