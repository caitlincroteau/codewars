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

//version without using BigInt. It works! Woot!!

function add(a, b) {
  const result = [];
  let carryOver = 0;
  const array1 = a.split("");
  const array2 = b.split("");

  //set arrays if the input strings are of different lengths
  if (a.length > b.length) {
    let zeros = a.length - b.length;
    while (zeros > 0) {
      array2.splice(0, 0, "0");
      zeros--;
    }
  }
  if (a.length < b.length) {
    let zeros = b.length - a.length;
    while (zeros > 0) {
      array1.splice(0, 0, "0");
      zeros--;
    }
  }

  //loop through arrays and calculate
  for (let i = array1.length - 1; i > 0; i--) {
    //convert elements to numbers and sum
    const sum = Number(array1[i]) + Number(array2[i]) + carryOver;
    const sumStr = sum.toString();
    if (sum > 9) {
      result.push(sumStr[1]);
      carryOver = Number(sumStr[0]);
    } else {
      result.push(sumStr);
      carryOver = 0;
    }
  }
  //handle o index + carry over
  result.push(Number(array1[0]) + Number(array2[0]) + carryOver);

  const reverse = result.reverse();
  const stringRep = reverse.join("");
  return stringRep;
}

console.log(add("20", "30"));
// "50"
console.log(add("123", "321"));
// "444"
console.log(add("11", "99"));
// "110"
console.log(add("9734", "508"));
// "10242"
console.log(add("63829983432984289347293874", "90938498237058927340892374089"));
// "91002328220491911630239667963"
