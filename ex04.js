/**
 * Exercise 4: Write a function `mostFrequentChar` that takes a string and returns
 * the character that appears the most times. If there is a tie, return the first
 * character that reaches the maximum frequency.
 *
 * Example: mostFrequentChar("javascript") should return "a".
 * */

function mostFrequentChar(word) {
  const characters = {}; // where i will store my characters

  // iterate over each character of the word param and store it into the object
  for (const char of word) {
    // if character property does not exist in the object, create a new property
    if (!characters[char]) {
      characters[char] = 0;
    }

    // increment the value of the character property
    characters[char] += 1;
  }

  // see the object on the terminal
  console.log(characters);

  let mostFrequent = ''; // stores the most frequent char
  let currMax = 0; // stores the number of times it appears

  // iterate over each character of the word again but this time check if object property value is greater than the current max
  for (const char of word) {
    // if character property value is greater than current max, store the number and chracter into the variables
    if (characters[char] > currMax) {
      currMax = characters[char];
      mostFrequent = char;
    }
  }

  // return the final most frequent character
  return mostFrequent;
}

console.log(mostFrequentChar('javascript')); // Expected output: "a"
