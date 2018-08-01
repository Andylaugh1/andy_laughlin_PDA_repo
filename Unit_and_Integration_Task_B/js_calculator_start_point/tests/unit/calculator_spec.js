var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  });

  it('it should be able to add',  function() {
    calculator.previousTotal = 4;
    calculator.add(1);
    assert.strictEqual(calculator.runningTotal, 5);
  });

  it('should be able to subtract', function() {
    calculator.previousTotal = 7;
    calculator.subtract(4);
    assert.strictEqual(calculator.runningTotal, 3);
  })

  it('it should be able to divide one number by another', function() {
    calculator.previousTotal = 21;
    calculator.divide(0);
    assert.strictEqual(calculator.runningTotal, 0);
  })

  it('it should be able to multiply one number by another', function() {
    calculator.previousTotal = 3;
    calculator.multiply(5);
    assert.strictEqual(calculator.runningTotal, 15);
  })

  it('it should be able to clear runnning total and set newTotal to false when a number is clicked', function() {
    calculator.runningTotal = 8
    calculator.numberClick(3);
    assert.strictEqual(calculator.runningTotal, 3);
    assert.strictEqual(calculator.newTotal, false);
  })

  it('it should not clear running total or set newTotal to false when a number is clicked, if newTotal is already set to false and runningTotal is not 0', function() {
    calculator.runningTotal = 8;
    calculator.newTotal = false;
    calculator.numberClick(3);
    calculator.numberClick(4);
    calculator.numberClick(5);
    assert.strictEqual(calculator.runningTotal, 8345);
    assert.strictEqual(calculator.newTotal, false);
  })

  it('it should be able to chain multiple operations together correctly',  function() {
    calculator.runningTotal = 8;
    calculator.operatorClick('+');
    calculator.operatorClick('*');
    calculator.operatorClick('=');
    assert.strictEqual(calculator.runningTotal, 256);
  })

  it('it should be able to clear running total without affecting the calculation', function() {
    calculator.runningTotal = 8;
    calculator.operatorClick('+');
    calculator.add(10);
    calculator.clearClick();
    assert.strictEqual(calculator.runningTotal, 0);
    assert.strictEqual(calculator.previousTotal, 8);
  })

  it('it should be able to clear previous Total and previous Operator when clear button is clicked twice', function() {
    calculator.runningTotal = 8;
    calculator.operatorClick('+');
    calculator.add(10);
    calculator.clearClick();
    calculator.clearClick();
    assert.strictEqual(calculator.runningTotal, 0);
    assert.strictEqual(calculator.previousTotal, null);
    assert.strictEqual(calculator.previousOperator, null);
  })

});
