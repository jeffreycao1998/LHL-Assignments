const { connect } = require('./client');

const handleUserInput = (key) => {
  if (key === '\u0003') {
    process.exit();
  }
};

const setupInput = () => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', key => {
    handleUserInput(key)
  });
  return stdin;
}

console.log('Connecting...client');

connect();
setupInput();
