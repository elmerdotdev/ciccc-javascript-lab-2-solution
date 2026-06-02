// Exercise 10: Write a function `convertToCamelCase` that takes a string
// with words separated by spaces or underscores, and returns the string in camelCase format.
// Example: convertToCamelCase("hello_world") should return "helloWorld".

function convertToCamelCase(str) {
  let removedSpacesUnderscores = [];

  if (str.includes(' ')) {
    removedSpacesUnderscores = str.split(' ');
  } else if (str.includes('_')) {
    removedSpacesUnderscores = str.split('_');
  }

  const words = [];

  removedSpacesUnderscores.forEach((word, i) => {
    if (i !== 0) {
      words.push(word[0].toUpperCase() + word.slice(1));
    } else {
      words.push(word);
    }
  });

  return words.join('');
}

console.log(convertToCamelCase('hello_world')); // Expected output: "helloWorld"
