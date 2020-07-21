/*
 * Write a function that joins the contents of conceptList together
 * into one String, concepts, with each list item separated from
 * the previous by a comma.
 *
 * To implement this we'll create a joinList function which will take 
 * in any array of strings return a comma-separated string.
 *
 * Note: We can NOT use the built-in Array join function.
 */

// Write our function (we must define it too!) below
// ...
const joinList = (list) => {
  let sentence = '';

  if (list.length === 0) {
    return sentence;
  }

  for( let i = 0; i < list.length - 1; i++) {
    sentence += list[i] + ', ';
  }
  sentence += list[list.length - 1];
  return sentence;
};

// Test / Driver Code below...
console.log(joinList(["hello", "world"]))