import { defineSupportCode } from 'cucumber';
import borrowingCalculatorPage from '../pageObjectsUtil/BorrowingCalculatorPage';


defineSupportCode(function({ When }) {
  

  When(/^I enter "([^"]*)" on the text box "([^"]*)"$/, function(arg1, arg2) {
    borrowingCalculatorPage.enterValue(arg1, arg2);
  });

When(/^I click on the "([^"]*)" button$/, function(arg) {
    borrowingCalculatorPage.clickBorrowingCapacity(arg);
  });

  

 When(/^I click on the "([^"]*)" radio buton of Application type field$/, function(arg1) {
    borrowingCalculatorPage.clickSingleRadioButton(arg1);
  })


When(/^I select (\d+) from the Number of dependants drop down$/, function(arg1) {
    borrowingCalculatorPage.selectNoOfDependents(arg1);
  })

When(/^I click on the "([^"]*)" Property you would like to buy radio button$/, function(arg1) {
    borrowingCalculatorPage.clickBorrowTypeHomeRadioButton(arg1);
  })

When(/^I click on the Start over button$/, function() {
    borrowingCalculatorPage.clickStartOverButton();
  })



});