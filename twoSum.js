// Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

// For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

// The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

// Based on: http://oj.leetcode.com/problems/two-sum/

function twoSum(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    const value = target - numbers[i];
    if (numbers.includes(value) && numbers.indexOf(value) !== i) {
      return [i, numbers.indexOf(value)];
    }
  }
  return [];
}

//value is in array 'numbers' but it is not at the same index it's being compared to ie you are not double counting the same index value. Eg [2,3,1], 4 does not count 2 twice.

console.log(twoSum([1, 2, 3], 4));
console.log(twoSum([1234, 5678, 9012], 14690));
console.log(twoSum([2, 2, 3], 4));
console.log(twoSum([2, 3, 1], 4));
//[2, 0]
//[1,2]
//[0,1]
//[1,2]
