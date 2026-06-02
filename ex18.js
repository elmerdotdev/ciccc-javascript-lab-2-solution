// Exercise 18: Given an array of people objects with `fullName` and `isStudent`,
// 1. Filter only students (isStudent === true)
// 2. Reformat fullName to "LastName, FirstName(s)"
// 3. Sort alphabetically by last name

const people = [
  { fullName: 'John Smith', isStudent: true },
  { fullName: 'Jane B. Doe', isStudent: false },
  { fullName: 'Charlie Miguel Chaplin', isStudent: true },
  { fullName: 'Zara Ali', isStudent: true },
];

console.log(
  people
    .filter((person) => person.isStudent)
    .map((person) => {
      const names = person.fullName.split(' ');
      const firstName = names[0];
      const lastName = names[names.length - 1];

      return `${lastName}, ${firstName}`;
    })
    .sort((a, b) => a.localeCompare(b)),
);
// Expected output: (array of strings)
// ["Ali, Zara", "Chaplin, Charlie Miguel", "Smith, John"]
