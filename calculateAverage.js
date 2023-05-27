//Write a function which calculates the average of the numbers in a given list.
//Note: Empty arrays should return 0.

function findAverage(array) {
  if (array.length === 0) return 0;

  let total = 0;
  for (let i of array) {
    total += i;
  }

  return total / array.length;
}
//3 mins 40 seconds

//use reduce method
function findAverage2(array) {
  if (array.length === 0) return 0;
  const sum = array.reduce((total, current) => total + current, 0);
  return sum / array.length;
}

const array1 = [5, 3, 15, 90, 12];
//25
const array2 = [-150, 6, 10000, 34, -112, 900];
//1779.66667

const array3 = [];

console.log(findAverage(array1));
console.log(findAverage(array2));
console.log(findAverage(array3));

console.log(findAverage2(array1));
console.log(findAverage2(array2));
console.log(findAverage2(array3));
