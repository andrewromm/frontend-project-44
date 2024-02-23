import getRandomInt from '../helpers/basic.js';

function isPrime(num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

export default function primeGame() {
  return {
    description: 'Answer "yes" if given number is prime. Otherwise answer "no".',
    generateRound: () => {
      const number = getRandomInt(100);
      const correctAnswer = isPrime(number) ? 'yes' : 'no';
      return [number, correctAnswer];
    },
  };
}
