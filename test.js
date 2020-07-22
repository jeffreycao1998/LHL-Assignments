const getArg = () => {
  return process.argv.slice(2);
}

const obfuscate = (password) => {
  const splitArg = password.split('');

  const newArg = splitArg
    .map( letter => {
      if (letter === "a") return "4";
      if (letter === "e") return "3";
      if (letter === "o") return "0";
      if (letter === "l") return "1";
      return letter;
    })
    .join('');

  console.log(newArg);
};

obfuscate(getArg()[0]);