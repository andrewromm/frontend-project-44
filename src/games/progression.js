import getRandomInt from '../helpers/basic.js';

export default function progressionGame() {
  return {
    description: 'What number is missing in the progression?',
    generateRound: () => {
      const progression = [];
      const progressionLength = 10;
      const startNumber = getRandomInt(100);
      const step = getRandomInt(10);
      for (let i = 0; i < progressionLength; i += 1) {
        progression.push(startNumber + step * i);
      }
      const hiddenIndex = Math.floor(Math.random() * progressionLength);
      const correctAnswer = progression[hiddenIndex].toString();
      progression[hiddenIndex] = '..';
      const question = progression.join(' ');
      return [question, correctAnswer];
    },
  };
}
