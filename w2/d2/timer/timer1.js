const args = process.argv.slice(2);

for (let alarm of args) {
  if (!isNaN(Number(alarm))) {
    setTimeout(() => {
      console.log(alarm);
    }, Number(alarm) * 1000)
  } else {
    console.log(`${alarm} is not a number btw...`)
  }
};