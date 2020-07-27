const encrypt = (plaintext, key) => {
  const letters = 
  [ 'a', 'b', 'c', 'd', 'e', 'f', 
    'g', 'h', 'i', 'j', 'k', 'l', 
    'm', 'n', 'o', 'p', 'q', 'r', 
    's', 't', 'u', 'v', 'w', 'x', 
    'y', 'z' ];

  const encodedTextArray = [];
  const plainTextArray = plaintext.split('');
  plainTextArray.forEach( letter => {
    if (letter === ' ') {
      encodedTextArray.push(' ');
    } else {
      const index = letters.findIndex((element) => element === letter);
      const newIndex = index + key;
      
      if (newIndex < 0) {
        encodedTextArray.push(letters[26 + newIndex]);
      } else if (newIndex > 25) {
        encodedTextArray.push(letters[newIndex - 26]);
      } else {
        encodedTextArray.push(letters[newIndex]);
      }
    }
  })
  return encodedTextArray.join('');
}

module.exports = { encrypt };