const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const profile = {

}

rl.question("What's your name? Nicknames are also acceptable! ", (answer) => {
  profile.name = answer
  rl.question("What's an activity you like doing? ", (answer) => {
    profile.hobby = answer;
    rl.question('What do you listen to while doing that? ', (answer) => {
      profile.song = answer;
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (answer) => {
        profile.favoriteMeal = answer;
        rl.question("What's your favourite thing to eat for that meal? ", (answer) => {
          profile.favoriteFood = answer;
          rl.question("Which sport is your absolute favourite? ", (answer) => {
            profile.sport = answer;
            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (answer) => {
              profile.superpower = answer;

              console.log(
              `My name is ${profile.name}. I like to ${profile.hobby} while listening to ${profile.song}.
              I like ${profile.favoriteMeal} the most because I can eat ${profile.favoriteFood}.
              My favorite sport is ${profile.sport} and if I could have any superpower it would be to ${profile.superpower}!`
              )
              rl.close();
            });
          });
        });
      });
    });
  });
});