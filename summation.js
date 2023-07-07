// Summation
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

const summation = function (num) {
  let count = 1;
  let result = 0;

  while (count <= num) {
    result += count;
    count++;
  }
  return result;
};

console.log(summation(2));
console.log(summation(8));
// 3 (1 + 2)
// 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

//this also gives you the total
//num * (num + 1) / 2

// 8 * (8 + 1) / 2
// 8 * 9 / 2
// 72 / 2
// 36

// 2 * (2 + 1) / 2
// 2 * (3) / 2
// 6 / 2
// 3
