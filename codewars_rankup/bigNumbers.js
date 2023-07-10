//4 kyu
//adding big numbers

//We need to sum big numbers and we require your help.

// Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.

// Notes
// The input numbers are big.
// The input is a string of only digits
// The numbers are positives

//NEED TO FINISH THIS.
//See this:
//https://levelup.gitconnected.com/how-to-add-two-very-large-numbers-in-javascript-6305ed8c5fad

//this works, but the version of node on this Kyu does not support BigInt
// function add(a, b) {
//   const bigI = BigInt(a) + BigInt(b);
//   return bigI.toString();
// }

function add(a, b) {
  // const array = ["63829983432984289347293874"]
  // const binaryRep = []
  let num1 = Number(a).toString(2);
  let num2 = Number(b).toString(2);

  let sum = num1 + num2;
  console.log(num1);
  console.log(num2);
  // console.log(array.charCodeAt[0].toString(2))
  // binaryRep.push(a.toString(2));
  // return binaryRep
}

console.log(add("20", "30"));
// console.log(add("123", "321"));
// "444"
// console.log(add("11", "99"));
// "110"

// console.log(add("63829983432984289347293874", "90938498237058927340892374089"));
// "91002328220491911630239667963"
