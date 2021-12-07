function areTwoNumbersTheSame(num1, num2) {
  if (num1 == num2) {
    return true;
  } else {
    return false;
  }
}

function subtract(minuend, subtrahend) {
  return minuend - subtrahend;
}

function add(number1, number2) {
  return number1 + number2;
}

function getSmallestNumber(number1, number2) {
  return Math.min(number1, number2);
}

function multiply(factor1, factor2) {
  return factor2 * factor1;
}

function getGreeting(nameOfPerson) {
  return `Hey, ${nameOfPerson}!`;
}

function getHey() {
  return "Hey";
}

module.exports = {
  subtract,
  add,
  getSmallestNumber,
  multiply,
  getGreeting,
  getHey,
};
