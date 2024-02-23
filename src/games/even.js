function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export default function evenGame() {
  return {
    description: 'Answer "yes" if the number is even, otherwise answer "no".',
    generateRound: () => {
      const randomNumber = getRandomInt(100);
      const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
      return [randomNumber, correctAnswer];
    },
  };
}
