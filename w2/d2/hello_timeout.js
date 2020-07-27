const words = ['43llo', 'thr3r3', 'w0r1d'];
let count = 0;

const myInterval = setInterval(() => {
  console.log(words[count]);
  count += 1;
}, 1000)

setTimeout(() => {
  clearInterval(myInterval);

}, 3000)