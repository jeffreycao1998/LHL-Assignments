//Worked with Jeffrey Cao for this pair programming activity


//Use transpose from previous activity (done with Jay Martens)
const transpose = function(matrix) {
    let result = [];
    for (const element of matrix[0]) {
      result.push([]);
    }
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        result[j].push(matrix[i][j])
      }
    }  
    return result;
};


const wordSearcher = (letters, word) => {
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true;
    }
}

//shift arrays to find words diagonally
const shiftArrayRight = (letters) => {
    for (let i = 1; i < letters.length; i++) {
        for (let j = 0; j < i; j++) {
            const removedLetter = letters[i].shift();
            letters[i].push(removedLetter);
        }
    }
    return letters;
}

const shiftArrayLeft = (letters) => {
    for (let i = 1; i < letters.length; i++) {
        for (let j = 0; j < i; j++) {
            const removedLetter = letters[i].pop();
            letters[i].unshift(removedLetter);
        }
    }
    return letters;
}

const wordSearch = (letters, word) => { 
    const reversedWord = word.split('').reverse().join('');

    // horizontal/vertical cases
    const horiSearch = wordSearcher(letters, word);
    const vertSearch = wordSearcher(transpose(letters), word);
    const revHoriSearch = wordSearcher(letters, reversedWord);
    const revVertSearch = wordSearcher(letters, reversedWord);
    
    // diagonal LEFT to RIGHT (BROKEN)
    const diagonalSearchRight = wordSearcher(transpose(shiftArrayRight(letters)), word);
    const revDiagonalSearchRight = wordSearcher(transpose(shiftArrayRight(letters)), reversedWord);

    // diagonal RIGHT to LEFT (BROKEN)
    const diagonalSearchLeft = wordSearcher(transpose(shiftArrayLeft(letters)), word);
    const revDiagonalSearchLeft = wordSearcher(transpose(shiftArrayLeft(letters)), reversedWord);

    if (horiSearch || vertSearch || revHoriSearch || revVertSearch || // horizontal/vertical searches
        diagonalSearchRight || revDiagonalSearchRight || 
        diagonalSearchLeft || revDiagonalSearchLeft) {
        return true;
    }
    return false;

}

module.exports = wordSearch