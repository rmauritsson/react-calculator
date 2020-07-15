import Operate from './operate';

const calculate = (calculator, buttonName) => {
  let newCalculator = { ...calculator };
  const number = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  const operator = ['x', '-', '%', '÷', '+'];

  if (number.includes(buttonName)) {
    if (!newCalculator.total) {
      newCalculator.total = buttonName;
    } else if (/\.$/g.test(newCalculator.next)) {
      newCalculator.next += buttonName;
    } else if (newCalculator.total && newCalculator.operation) {
      newCalculator.next = buttonName;
    } else if (/\.$/g.test(newCalculator.total)) {
      newCalculator.total += buttonName;
    } else {
      newCalculator.total = buttonName;
    }
  } else if (buttonName === '+/-') {
    if (newCalculator.total) {
      newCalculator.total = Operate(newCalculator.total, '-1', 'x');
    }
    if (newCalculator.next) {
      newCalculator.next = Operate(newCalculator.next, '-1', 'x');
    }
  } else if (buttonName === '.') {
    if (newCalculator.total && !/\.+/g.test(newCalculator.total)) {
      newCalculator.total += '.';
    } else if (newCalculator.next && !/\.+/g.test(newCalculator.next)) {
      newCalculator.next += '.';
    }
  } else if (buttonName === 'AC') {
    newCalculator = { total: null, next: null, operation: null };
  } else if (operator.includes(buttonName)) {
    if (newCalculator.total) {
      newCalculator.operation = buttonName;
    }
  } else if (buttonName === '=') {
    if (newCalculator.total && newCalculator.next) {
      newCalculator.total = Operate(newCalculator.total, newCalculator.next,
        newCalculator.operation);
      newCalculator.next = null;
      newCalculator.operation = null;
    }
  }

  return newCalculator;
};

export default calculate;
