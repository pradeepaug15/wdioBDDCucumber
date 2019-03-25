
  wdioBDDCucumber-

  This is a webdriverIO with cucumber repository. It contains webdriverIO-v4 (Selenium - Node.js/JavaScript) framework
  and libraries which demonstrates tool to develop the UI automation script using the Cucumber (v 3.x) BDD framework. 
  It generates Spec, JUNIT, Allure, JSON reporters as well.

  prerequisite softwares - Installation 
  
  *This project is tested on Node v-10.14.0. While earlier
  versions of node may be compatible.

  *This code base is developed on windows OS with public internet.
  *If you are behind the proxy, please have admin rights and update the repository/registry in .npmrc or execute 
  "npm config set registry 'your network place of repository link without quotes'"

  1) JDK 1.8: Install JDK 1.8+ and make sure class path is set properly. JAVA is
  require to start Selenium Server.

  2) Node.JS: Install from the site - https://nodejs.org/en/ take the LTS version
  based on your Operating system. Please make sure you install NodeJS
  globally. If you have nvm installed globally, then run nvm install to get
  the latest version of node specified in the.nvmrc file here. If you don't
  use nvm, be sure that you are using a compatible version.

  *Once the NodeJS and NPM installation is done - open terminal (MAC OSX) or command prompt (for
  windows OS) and type below command to verify NodeJS has been installed
  properly.

      node --version       npm --version   Above command should print out the
  version that you have installed.

  3) Now navigate to the framework's package.json in wdioBDDCumber folder and run "npm install" to
  get all dependencies downloaded.

  *Execute the entire test suite in local environment, use the step mentioned below

  4) Go to root folder /wdioBDDCucumber of the project through cmd prompt and run the command "npm run test".

  *The above step executes the test cases and write the JSON and xml reports.

  5) The JSON and xml reports are available on wdioBDDCucumber/reports/

  *To get the HTML based report from the JSON I have used allure libabry. Execute the below step to get the beautified and more            detailed HTML report.

  6) Go to root folder /wdioBDDCucumber of the project through cmd prompt and run the command "npm run allure-report".
  *Once the cmd is executed successfuly, it opens up the report automatically through your default browser. 
  If not it shows the local url to launch the report. Copy and go to the URL.

  *The Allure Reporter creates Allure test reports which in an HTML
  generated website with all necessary information to debug your test results
  and take a look on error screenshots. 

  *ScreenShot on failure are recorded at wdioBDDCucumber/reports/errorShots

  *Allure has several other reporting tools optimized for the CI server of our
  choice.
  *I have tried other reporting utilities as well, like Junit/xunit.# wdioBDDCucumber.
  * I have uploaded some sample reports of JSON and XML in the "reports" folder in the repo.
  
  Thank you!
