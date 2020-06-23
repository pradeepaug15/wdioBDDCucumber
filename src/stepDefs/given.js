import { defineSupportCode } from 'cucumber';
import borrowingCalculatorPage from '../pageObjectsUtil/BorrowingCalculatorPage';

defineSupportCode(function({ Given }) {

 
  Given(/^I launch the borrowing calculator webApp$/, function() {
    borrowingCalculatorPage.open();
    });


  Given(/^I should the page title as "([^"]*)"$/, function(arg) {
    borrowingCalculatorPage.getTitle().should.be.equal(arg);
    });
  


Given(/^I should see "([^"]*)" on the text box "([^"]*)"$/, function(arg1, arg2) {
    borrowingCalculatorPage.validateDefaultValue(arg2).should.be.equal(arg1);
  });



Given(/^I should see the Single is selected on Application type radio button$/, function() {
    borrowingCalculatorPage.validateDefaultSingleRadioBtn().should.be.equal('true');
    
  });

Given(/^I should see the Home to live in is selected on Property you would like to buy radio button$/, function() {
    borrowingCalculatorPage.validateDefaultPropertyTypeRadioBtn().should.be.equal('true');
  
  });

Given(/^I should see the No of dependents drop down to be "([^"]*)"$/, function(arg) {
    borrowingCalculatorPage.validateDefaultDropDownValue().should.be.equal(arg);
  
  });

});