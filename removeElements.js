// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!

function removeEveryOther(arr) {
  let newArr = [];
  for (let i = 0; i <= arr.length; i += 2) {
    if (arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

// console.log(removeEveryOther(["Keep", "Remove", "Keep", "Remove", "Keep"]));
//["Keep", "Keep", "Keep"];

//SOLVED THIS by creating a NEW ARRAY

//BUT SHOULD USE FILTER METHOD!!
//The filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.

function removeEveryOther2(arr) {
  return arr.filter((e, i) => i % 2 === 0);
}

console.log(
  removeEveryOther2(["Keep", "Remove", "Keep", "Remove", "Keep", "Remove"])
);

//e = The current element being processed in the array.
//i = The index of the current element being processed in the array.
