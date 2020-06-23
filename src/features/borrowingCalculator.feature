Feature: validating the borrowing calculator functionality.
# This fetaure file covers the following acceptance scenarios:
# 1) Successful borrowing estimate.
# 2) Clearing all fields functionality on click of start over



Background: Launch the borrowing calculator page

Given I launch the borrowing calculator webApp
And I should the page title as "Home loan borrowing power calculator | ANZ"



@done
Scenario: Validation of the successful borrowing estimate calcualation functionality

Given I click on the "Single" radio buton of Application type field
And I select 0 from the Number of dependants drop down
And I click on the "Home to live in" Property you would like to buy radio button
And I enter "80,000" on the text box "Your income (before tax)"
And I enter "10,000" on the text box "Your other income"
And I enter "500" on the text box "Living expenses"
And I enter "0" on the text box "Current home loan repayments"
And I enter "100" on the text box "Other loan repayments"
And I enter "0" on the text box "Other commitments"
And I enter "10,000" on the text box "Total credit card limits"
When I click on the "Work out how much I could borrow" button
Then I should see the We estimate you could borrow field with "$488,000" value



@done
Scenario: Validation of startover functionality which clears all relevent fields


When I click on the "Single" radio buton of Application type field
And I select 0 from the Number of dependants drop down
And I click on the "Home to live in" Property you would like to buy radio button
And I enter "80,000" on the text box "Your income (before tax)"
And I enter "10,000" on the text box "Your other income"
And I enter "500" on the text box "Living expenses"
And I enter "0" on the text box "Current home loan repayments"
And I enter "100" on the text box "Other loan repayments"
And I enter "0" on the text box "Other commitments"
And I enter "10,000" on the text box "Total credit card limits"
And I click on the "Work out how much I could borrow" button

When I click on the Start over button
Then I should see the Single is selected on Application type radio button
And I should see the No of dependents drop down to be "0"
And I should see the Home to live in is selected on Property you would like to buy radio button
And I should see "0" on the text box "Your income (before tax)"
And I should see "0" on the text box "Your other income"
And I should see "0" on the text box "Living expenses"
And I should see "0" on the text box "Current home loan repayments"
And I should see "0" on the text box "Other loan repayments"
And I should see "0" on the text box "Total credit card limits"

@done
Scenario: Validation for warning message to contact the customer care

Given I enter "1" on the text box "Living expenses"

When I click on the "Work out how much I could borrow" button

Then I should see error message "Based on the details you've entered, we're unable to give you an estimate of your borrowing power with this calculator. For questions, call us on 1800 035 500."
