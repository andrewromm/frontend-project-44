import readlineSync from 'readline-sync';

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function askQuestion() {
  const randomNumber = getRandomInt(100);
  const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
  const answer = readlineSync.question(`Question: ${randomNumber}\nYour answer: `);

  if (answer === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  return false;
}

export default function evenGame(userName) {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    if (!askQuestion()) {
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
}
