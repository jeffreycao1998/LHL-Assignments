let connection;

const handleUserInput = (key) => {
  switch (key) {
    case '\u0003': // ctrl + c
      process.exit();
      break;
    case '\u0077': // w
      connection.write('Move: up');
      break;
    case '\u0061': // a
      connection.write('Move: left');
      break;
    case '\u0073': // s
      connection.write('Move: down');
      break;
    case '\u0064': // d
      connection.write('Move: right');
      break;
    case '\u0031': // 1
      connection.write("Say: I'm clicking 1!");
      break;
    case '\u0032': // 2
      connection.write("Say: I'm clicking 2!");
      break;
    case '\u0033': // 3
      connection.write("Say: I'm clicking 3!");
      break;
    
  }
};

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', key => {
    handleUserInput(key)
  });
  return stdin;
}

module.exports = {
  setupInput,
}