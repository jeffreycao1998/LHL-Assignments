const args = process.argv.slice(2);

const sum = (args) => {
  const total = args.reduce((total, num) => {
    return total + Number(num);
  },0);

  return total;
};

console.log(sum(args));