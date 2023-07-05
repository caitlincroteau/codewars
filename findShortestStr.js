// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

//longer version:
function findShort(s) {
  let array = s.split(" ");
  let shortest = array[0].length;
  for (let i = 1; i < array.length; i++) {
    if (array[i].length < shortest) {
      shortest = array[i].length;
    }
  }
  return shortest;
}

//using the sort function:
function findShort2(s) {
  let array = s.split(" ");
  array.sort((a, b) => {
    return a.length - b.length;
  });
  return array[0].length;
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"));
console.log(
  findShort(
    "turns out random test cases are easier than writing out basic ones"
  )
);
console.log(findShort("Let's travel abroad shall we"));
//3, 3, 2

console.log(findShort2("bitcoin take over the world maybe who knows perhaps"));
console.log(
  findShort2(
    "turns out random test cases are easier than writing out basic ones"
  )
);
console.log(findShort2("Let's travel abroad shall we"));
//3, 3, 2
