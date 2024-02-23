import readlineSync from 'readline-sync';

export default function playGame(game, userName) {
  console.log(game.description);
  for (let i = 0; i < 3; i += 1) {
    const [question, correctAnswer] = game.generateRound();
    const userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);
    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
}
