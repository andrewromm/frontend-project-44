import getRandomInt from '../helpers/basic.js';

function getGcd(a, b) {
  if (!b) {
    return a;
  }
  return getGcd(b, a % b);
}

export default function gcdGame() {
  return {
    description: 'Find the greatest common divisor of given numbers.',
    generateRound: () => {
      const firstNumber = getRandomInt(100);
      const secondNumber = getRandomInt(100);
      const question = `${firstNumber} ${secondNumber}`;
      const correctAnswer = getGcd(firstNumber, secondNumber);
      return [question, correctAnswer.toString()];
    },
  };
}
