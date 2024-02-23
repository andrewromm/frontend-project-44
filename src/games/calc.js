function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getRandomOperator() {
  const operators = ['+', '-', '*'];
  return operators[getRandomInt(operators.length)];
}

export default function calcGame() {
  return {
    description: 'What is the result of the expression?',
    generateRound: () => {
      const firstNumber = getRandomInt(100);
      const secondNumber = getRandomInt(100);
      const operator = getRandomOperator();
      const question = `${firstNumber} ${operator} ${secondNumber}`;
      let correctAnswer;
      switch (operator) {
        case '+':
          correctAnswer = firstNumber + secondNumber;
          break;
        case '-':
          correctAnswer = firstNumber - secondNumber;
          break;
        case '*':
          correctAnswer = firstNumber * secondNumber;
          break;
        default:
          break;
      }
      return [question, correctAnswer.toString()];
    },
  };
}
