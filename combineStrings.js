// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

function longest(s1, s2) {
  const array = (s1 + s2).toLowerCase().split("").sort();
  const newArray = array.filter((e, i) => {
    return array.indexOf(e) === i;
  });

  return newArray.join("")
}

//https://dev.to/nomishah/remove-duplicates-from-an-array-using-indexof-and-filter-methods-2jeh
//include only elements whose indexes match their indexOf values ie indexOf only returns the first index where that character is found.

//LOOK AT USING new Set for this in future 
//https://dev.to/soyleninjs/3-ways-to-remove-duplicates-in-an-array-in-javascript-259o

const str1 = 'Hello';
const str2 = 'World';
console.log(longest(str1, str2));

a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
console.log(longest(a, b));
// -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
console.log(longest(a, a));
// -> "abcdefghijklmnopqrstuvwxyz"