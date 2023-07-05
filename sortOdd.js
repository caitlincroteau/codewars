// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

function sortArray(array) {
  //find indexes of odd nums
  //create sorted list of odd nums
  //plug those sorted nums back into the odd indexes in og array
  const indexes = [];
  const odds = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      indexes.push(i);
      odds.push(array[i]);
    }
  }
  odds.sort((a, b) => a - b);

  for(let i = 0; i < indexes.length; i++) {
    array[indexes[i]] = odds[i];
  }

  return array;
}

console.log(sortArray([7, 1]));
console.log(sortArray([5, 8, 6, 3, 4]));
console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));
console.log(sortArray([1, 11, 2, 8, 3, 4, 5]));


// console.log([1, 11, 2, 8, 3, 4, 5].sort((a, b) => a - b));