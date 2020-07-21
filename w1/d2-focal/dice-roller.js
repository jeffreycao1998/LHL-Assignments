const args = process.argv.slice(2);

const rollDice = (numRolls) => {
  const rolls = [];
  for (let i = 0; i < numRolls; i++) {
    rolls.push(Math.ceil(Math.random() * 6));
  };
  return `Rolled ${numRolls} dice: ${rolls.join(', ')}`;
};

console.log(rollDice(args));