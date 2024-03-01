// EXAMPLE 1 - Find the indexes of all Occurrences of Element in JS Array

const arr = ['a', 'b', 'a', 'c', 'a'];

const indexes = [];

arr.forEach((element, index) => {
  if (element === 'a') {
    indexes.push(index);
  }
});

console.log(indexes); // 👉️ [ 0, 2, 4 ]

// ------------------------------------------------------------------

// // EXAMPLE 2 - Find the Index of all Occurrences of an Element in Array using `reduce()`

// const arr = ['a', 'b', 'a', 'c', 'a'];

// const indexes = arr.reduce((accumulator, current, index) => {
//   if (current === 'a') {
//     accumulator.push(index);
//   }

//   return accumulator;
// }, []);

// console.log(indexes); // 👉️ [ 0, 2, 4 ]

// ------------------------------------------------------------------

// // EXAMPLE 3 - Find the Index of all Occurrences of an Element in Array using `map()`

// const arr = ['a', 'b', 'a', 'c', 'a'];

// const value = 'a';

// const indexes = arr
//   .map((element, index) => (element === value ? index : -1))
//   .filter(element => element !== -1);

// console.log(indexes); // 👉️ [ 0, 2, 4 ]
