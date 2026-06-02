// Exercise 3: Write a function `findMissingNumber` that takes an array of integers from 1 to `n`
// with one number missing and returns the missing number.
// Example: findMissingNumber([1, 2, 4, 5]) should return 3.

function findMissingNumber(arr) {
  const completeArr = [];

  for (let i = arr[0]; i <= arr[arr.length - 1]; i++) {
    completeArr.push(i);
  }

  let missingNum = null;

  for (const num of completeArr) {
    if (!arr.includes(num)) {
      missingNum = num;
    }
  }

  return missingNum;
}

console.log(findMissingNumber([1, 2, 4, 5])); // Expected output: 3
