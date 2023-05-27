// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

function findSmallestInt(args) {
  let min = args[0];
  for (let i of args) {
    if (i < min) {
      min = i;
    }
  }
  return min;
}

//USING SORT METHOD ON ARRAYS

//https://www.tutorialspoint.com/How-to-perform-numeric-sort-in-JavaScript#:~:text=In%20JavaScript%2C%20we%20use%20the,and%20then%20compared%20and%20sorted.

//https://abita-b56.medium.com/array-sort-method-and-comparator-in-javascript-84afcc5c0d10

//using sort alone does not give an accurate result because it sorts ALPHABETICALLY
// To solve this problem, we create a compare function that returns positive, zero, and negative values.

// arr.sort(function(a, b){return a - b})

//sort function with comparision - this is accurate.
//sort() modifies the original array
function findSmallestInt2(args) {
  args.sort((a, b) => a - b);
  return args[0];
}

//sort function alone - this is inaccurate.
function findSmallestInt3(args) {
  args.sort();
  return args[0];
}

const array1 = [34, 15, 88, 2];
//result = 2
const array2 = [34, -345, -1, 100];
// result = -345

console.log(findSmallestInt(array1));
console.log(findSmallestInt(array2));
console.log(findSmallestInt2(array1));
console.log(findSmallestInt2(array2));
console.log(findSmallestInt3(array1));
console.log(findSmallestInt3(array2));
