import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const valueOne = Big(numberOne);
  const valueTwo = Big(numberTwo);

  switch (operation) {
    case '+':
      return valueOne.plus(valueTwo).toString();
    case '-':
      return valueOne.minus(valueTwo).toString();
    case '÷':
      return valueOne.div(valueTwo).toString();
    case 'x':
      return valueOne.mul(valueTwo).toString();
    case '%':
      return valueOne.mod(valueTwo).toString();
    case '0':
      return 'Syntax Error';
    default:
      return 0;
  }
};

export default operate;
