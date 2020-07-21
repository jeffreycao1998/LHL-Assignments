var originalWords = process.argv.slice(2);
var pigLatinWords = [];

function translateToPigLatin(word) {
  return word.slice(1) + word[0] + "ay";
}

for (var i = 0; i < originalWords.length; i++) {
  pigLatinWords.push(translateToPigLatin(originalWords[i]));
}

console.log(pigLatinWords.join(' '));