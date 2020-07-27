const lines = ['|', '/', '-', '\\', '|']
let timer = 100;

for (let line of lines) {
  setTimeout(() => {
    process.stdout.write(`\r${line}   `);
  }, timer);
  timer += 200;
};