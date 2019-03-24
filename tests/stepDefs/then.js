import { defineSupportCode } from 'cucumber';
import borrowingCalculatorPage from '../pageObjectsUtil/BorrowingCalculatorPage';

defineSupportCode(function({ Then }) {


Then(/^I should see the We estimate you could borrow field with "([^"]*)" value$/, function(arg1) {
    borrowingCalculatorPage.calculatedBorrowingCapacity(arg1).should.be.equal(arg1);
  });

Then(/^I should see error message "([^"]*)"$/, function(arg1) {
    borrowingCalculatorPage.borrowErrorMessage().should.be.equal(arg1);
  });

});
