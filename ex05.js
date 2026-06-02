// Exercise 5: Write a function `countConsonants` that takes a string
// and returns the number of consonants in the string.
// Example: countConsonants("hello world") should return 7.

function countConsonants(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;

  for (const char of str) {
    if (!vowels.includes(char) && char !== ' ') {
      count++;
    }
  }

  return count;
}

console.log(countConsonants('hello world')); // Expected output: 7
