// Enough is enough!
// Alice and Bob were on a holiday. Both of them took many pictures of the places they've been, and now they want to show Charlie their entire collection. However, Charlie doesn't like these sessions, since the motif usually repeats. He isn't fond of seeing the Eiffel tower 40 times.
// He tells them that he will only sit for the session if they show the same motif at most N times. Luckily, Alice and Bob are able to encode the motif as a number. Can you help them to remove numbers such that their list contains each number only up to N times, without changing the order?

// Task
// Given a list and a number, create a new list that contains each number of list at most N times, without reordering.
// For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].
// With list [20,37,20,21] and number 1, the result would be [20,37,21].

//could not solve this! Need to come back to it.
function deleteNth(arr, n) {
  let count = 1;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j <= arr.length - 1; j++) {
      if (arr[i] === arr[j]) {
        count++;
        if (count > n) {
          arr.splice(j, 1);
        }
      }
    }
    count = 1;
  }

  return arr;
}

// console.log(deleteNth([1,2,3,1,2,1,2,3], 2));
//[1,2,3,1,2,3]
// console.log(deleteNth([20,37,20,21], 1));
// //[20,37,21]
// console.log(deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3));
//[1, 1, 3, 3, 7, 2, 2, 2]

// arr.splice(5, 1)
// return arr

const arrTest = [
  4, 19, 40, 7, 7, 4, 19, 15, 40, 19, 7, 40, 15, 15, 15, 47, 40, 40, 19, 19, 40,
  4, 29, 30, 4, 47, 29, 4, 19, 15, 15, 47, 4, 47, 4, 4, 40, 40, 47, 15, 29, 30,
  4, 15, 47, 7, 40, 40,
];
const x = 8;

console.log(deleteNth(arrTest, x));
// should be:
// [4,19,40,7,7,4,19,15,40,19,7,40,15,15,15,47,40,40,19,19,40,4,29,30,4,47,29,4,19,15,15,47,4,47,4,4,40,40,47,15,29,30,15,47,7];

// [ 4, 19, 40, 7, 7, 4, 19, 15, 40, 19, 7, 40, 15, 15, 15, 47, 40, 40, 19, 19, 40, 4, 29, 30, 4, 47, 29, 4, 19, 15, 15, 47, 4, 47, 4, 4, 40, 40, 47, 15, 29, 30, 15, 47, 7, 40 ]

// to have the same ordered members as [ 4, 19, 40, 7, 7, 4, 19, 15, 40, 19, 7, 40, 15, 15, 15, 47, 40, 40, 19, 19, 40, 4, 29, 30, 4, 47, 29, 4, 19, 15, 15, 47, 4, 47, 4, 4, 40, 40, 47, 15, 29, 30, 15, 47, 7 ]
