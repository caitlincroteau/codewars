// Snail Sort
// Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.
// NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.

// NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]].

const snail = function (array) {
  // //step 1 - add first line of array
  // const result = array[0];
  // const numElements = array.length;

  // //step 2 - add ends of remaining arrays
  // for (let i = 1; i < numElements; i++) {
  //   result.push(array[i][array[i].length - 1])
  // }

  // return result
  const result = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = i; j < array.length; j++) {
      result.push(array[i][j]);
      i
    }
  }
  return result;
};

//exmples"
array1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(snail(array1));
// => [1,2,3,6,9,8,7,4,5]

// array2 = [[1,2,3],
//          [8,9,4],
//          [7,6,5]]
// console.log(snail(array2));
// // => [1,2,3,4,5,6,7,8,9]
