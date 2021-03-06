const defaultTimeoutInterval = process.env.DEBUG ? (60 * 60 * 500) : 90000;
var tags = ['@done'];
exports.config = {
    
    specs: [
        './src/features/**/*.feature',
    ],
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],

    maxInstances: 10,

    capabilities: [

          {
              browserName: 'chrome',
              // platform: 'Windows 10',
              // version: '50.0',
              maxInstances: '5',
          },
          
    ],
    //
    // ===================
    // Test Configurations
    // ===================
    // Define all options that are relevant for the WebdriverIO instance here
    //
    // By default WebdriverIO commands are executed in a synchronous way using
    // the wdio-sync package. If you still want to run your tests in an async way
    // e.g. using promises you can set the sync option to false.
    sync: true,
    logLevel: 'silent',     // Level of logging verbosity: silent | verbose | command | data | result | error
    coloredLogs: true,      // Enables colors for log output.
    screenshotPath: './reports/errorShots/',   // Saves a screenshot to a given path if a command fails.
    //
    // Set a base URL in order to shorten url command calls. If your url parameter starts
    // with "/", then the base url gets prepended.
    baseUrl: 'http://localhost:8080',
    waitforTimeout: 90000,            // Default timeout for all waitFor* commands.
    connectionRetryTimeout: 90000,    // Default timeout in milliseconds for request  if Selenium Grid doesn't send response
    connectionRetryCount: 3,          // Default request retries count

    // Services take over a specific job you don't want to take care of. They enhance
    // your test setup with almost no effort. Unlike plugins, they don't add new
    // commands. Instead, they hook themselves up into the test process.
    //
    services: ['selenium-standalone'],
    //
    framework: 'cucumber',
    reporters: ['spec', 'junit','allure', 'json'],

    reporterOptions: {
        junit:  {outputDir: './reports/junit-results/'},
        json:   {outputDir: './reports/json-results/'},
        allure: {
          outputDir:   './reports/allure-results/',
          disableWebdriverStepsReporting: false,
          disableWebdriverScreenshotsReporting: false,
          useCucumberStepReporter: true,
        },
        cucumberHTMLReport: {
        jsonFile: './reports/cucumber_report.json',
        output: './reports/cucumber_report.html',
        }
         
    },

    // If you are using Cucumber you need to specify the location of your step definitions.
    cucumberOpts: {
        require: ['./src/stepDefs/given.js', './src/stepDefs/when.js', './src/stepDefs/then.js'],   // <string[]> (file/dir) require files before executing features
        backtrace: true,    // <boolean> show full backtrace for errors
        compiler: ['js:babel-core/register'], // <string[]> filetype:compiler used for processing required features
        failAmbiguousDefinitions: true,       // <boolean< Treat ambiguous definitions as errors
        dryRun: false,      // <boolean> invoke formatters without executing steps
        failFast: false,    // <boolean> abort the run on first failure
        ignoreUndefinedDefinitions: true,    // <boolean> Enable this config to treat undefined definitions as warnings
        name: [],           // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
        snippets: true,     // <boolean> hide step definition snippets for pending steps
        format: ['pretty'], // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
        colors: true,       // <boolean> disable colors in formatter output
        snippets: false,    // <boolean> hide step definition snippets for pending steps
        source: false,      // <boolean> hide source uris
        profile: [],        // <string[]> (name) specify the profile to use
        strict: true,       // <boolean> fail if there are any undefined or pending steps
        tagExpression: 'not @Pending',      // <string> (expression) only execute the features or scenarios with tags matching the expression, see https://docs.cucumber.io/tag-expressions/
        timeout: defaultTimeoutInterval,    // <number> timeout for step definitions
        tagsInTitle: false,                 // <boolean> add cucumber tags to feature or scenario name
        snippetSyntax: undefined,           // <string> specify a custom snippet syntax
        tags: tags,
    },

    //
    // =====
    // Hooks
    // =====
    // WedriverIO provides several hooks you can use to interfere with the test process in order to enhance
    // it and to build services around it. You can either apply a single function or an array of
    // methods to it. If one of them returns with a promise, WebdriverIO will wait until that promise got
    // resolved to continue.
    //
    // Gets executed before test execution begins. At this point you can access all global
    // variables, such as `browser`. It is the perfect place to define custom commands.
    before: function() {
      /**
       * Setup the Chai assertion framework
       */
      const chai    = require('chai');
      global.expect = chai.expect;
      global.assert = chai.assert;
      global.should = chai.should();
    },
    
};