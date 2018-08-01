var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  })

  it('it should update the display of the running total as number buttons as pushed', function() {
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    element(by.css('#number5')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('25')
  })

  it('it should update the display with the result of an add operation', function() {
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number5')).click();
    element(by.css('#operator_equals')).click()
    expect(running_total.getAttribute('value')).to.eventually.equal('7')
  })

  it('it should update the display with the result of a subtract operation', function() {
    running_total = element(by.css('#running_total'))
    element(by.css('#number5')).click();
    element(by.css('#operator_subtract')).click();
    element(by.css('#number2')).click();
    element(by.css('#operator_equals')).click()
    expect(running_total.getAttribute('value')).to.eventually.equal('3')
  })

  it('it should update the display with the result of a divide operation', function() {
    running_total = element(by.css('#running_total'))
    element(by.css('#number9')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number3')).click();
    element(by.css('#operator_equals')).click()
    expect(running_total.getAttribute('value')).to.eventually.equal('3')
  })

  it('it should update the display with the result of a multiply operation', function() {
    running_total = element(by.css('#running_total'))
    element(by.css('#number6')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#number4')).click();
    element(by.css('#operator_equals')).click()
    expect(running_total.getAttribute('value')).to.eventually.equal('24')
  })

  it('it should be able to chain multiple operations together', function() {
    running_total = element(by.css('#running_total'))
    element(by.css('#number5')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#number4')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number5')).click();
    element(by.css('#operator_subtract')).click();
    element(by.css('#number9')).click();
    element(by.css('#operator_equals')).click()
    expect(running_total.getAttribute('value')).to.eventually.equal('16')
  })

// Below test fails as negative numbers do not work, because the new number clicked overrides the - operator. There is also no decimal button on the calculator so cannot work for decimals
// Therefore the calculator works as expected, but tests do not pass
  it('it should be able to work for a range of numbers, such as decimals and negative numbers', function() {
    running_total = element(by.css('#running_total'))
    element(by.css('#operator_subtract')).click();
    element(by.css('#number5')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#operator_subtract')).click();
    element(by.css('#number3')).click();
    element(by.css('#operator_equals')).click()
    expect(running_total.getAttribute('value')).to.eventually.equal('-8')
  })

// When you divide by '0', the calculator produces infinity currently. Below is the test for what would be preferred, although this test fails in the current state of the program:
  it('should display 0 when any number is divided by 0', function() {
    running_total = element(by.css('#running_total'))
    element(by.css('#number9')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number0')).click();
    element(by.css('#operator_equals')).click()
    expect(running_total.getAttribute('value')).to.eventually.equal('0')
  })

// Update, the code has now been changed in calculator.js and the last test now passes

});
