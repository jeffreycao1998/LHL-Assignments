const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const timers = [];

process.stdin.setRawMode(true);
process.stdin.setEncoding('utf8');

process.stdin.on('data', (key) => {
  if (key === '\u0062') {
    clearTimeout(timers[0]);
    timers.shift();
    console.log(`\nYou pressed 'b'! You set the alarm off prematurely!!`);
  } else if (key === '\u0003') {
    console.log('\nThanks for using me, ciao!')
    process.exit();
  }
});

const setTimer = (length) => {
  console.log(`setting timer for ${length} seconds...`)
  const myTimer = setTimeout(() => {
    console.log('\nbeep! beep! beep!')
  }, length * 1000);
  timers.push(myTimer);

  askQuestion("input a number from 1 to 9! ");
}

const askQuestion = (question) => {
  rl.question(question, answer => {
    setTimer(Number(answer));
  });
}

askQuestion("input a number from 1 to 9! ");