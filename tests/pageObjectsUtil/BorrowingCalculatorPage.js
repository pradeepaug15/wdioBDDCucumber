import Page from './page';


  class BorrowingCalculatorPage extends Page {
     
    get singleRadioBtn() {return browser.element('#application_type_single');}
    get borrowTypeHomeRadioBtn() {return browser.element('#borrow_type_home');}
    textBox(item2) { return browser.element('//div[label="'+ item2 +'"]').element('input[type="text"]');}
    get selectNoOfDependentsDropDown() {return browser.element('//div[label="Number of dependants"]').element('.borrow__question__answer--select');}
    borrowingCapacityButton(item) {return browser.element('//div[button="'+ item +'"]');}
    get calculatedBorrowingCapacityValue() {return browser.element('.borrow__result__text .borrow__result__text__amount');}
    getDefaultValue(item2) { return browser.element('//div[label="'+ item2 +'"]').element('input');}
    get getDefaultValueAplicationType() { return browser.element('[for="application_type_single"]').element('input');}
    get getPropertYouWouldLikeToBuy() { return browser.element('[for="application_type_single"]').element('input');}
    get startOverButton() {return browser.element('.start-over');}
    get borrowErrorText() {return browser.element('.borrow__error .borrow__error__text');}

    open () {
        super.open('https://www.anz.com.au/personal/home-loans/calculators-tools/much-borrow/')
        this.explicitWaitElementPresent(browser.getTitle());

      }

      getTitle(){
        return browser.getTitle();
      }



    enterValue(item1, item2){

      this.textBox(item2).setValue(item1);
      }

    clickSingleRadioButton(item1){
      this.singleRadioBtn.click();

      }

      clickBorrowTypeHomeRadioButton(item1){
        this.borrowTypeHomeRadioBtn.click();

      }

      selectNoOfDependents(item1){
       this.selectNoOfDependentsDropDown.selectByIndex(item1);
      }

    clickBorrowingCapacity(item1){
      this.explicitWaitElementPresent(this.borrowingCapacityButton(item1));
      this.borrowingCapacityButton(item1).click();

      }

    calculatedBorrowingCapacity(item1){

      this.explicitWaitTextPresent(this.calculatedBorrowingCapacityValue, item1);

      return this.calculatedBorrowingCapacityValue.getText();
    }

    validateDefaultValue(item1){
      return this.getDefaultValue(item1).getAttribute('value');
    }

    validateDefaultSingleRadioBtn(){
      return this.getDefaultValueAplicationType.getAttribute('checked');
    }


    validateDefaultPropertyTypeRadioBtn(){
      return this.getPropertYouWouldLikeToBuy.getAttribute('checked');
    }

    validateDefaultDropDownValue(){
      return this.selectNoOfDependentsDropDown.getText('option:checked');
    }

    clickStartOverButton(){
      this.startOverButton.click();
    }


    borrowErrorMessage(){


      this.explicitWaitElementPresent(this.borrowErrorText);
      return this.borrowErrorText.getText();
    }

    explicitWaitElementPresent(elem){
      browser.waitUntil(() => {
        return elem !== null
      }, 5000, 'expected text to be different after 5s');
    }

    explicitWaitTextPresent(elem, textToCompare){
      browser.waitUntil(() => {
        return elem.getText() === textToCompare
      }, 5000, 'expected text to be different after 5s');
    }

  }
  export default new BorrowingCalculatorPage();