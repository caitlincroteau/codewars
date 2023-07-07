// You might know some pretty large perfect squares. But what about the NEXT one?

// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

function findNextSquare(sq) {
  const squareRoot = Math.sqrt(sq);
  if (Number.isInteger(squareRoot)) {
    return Math.pow(squareRoot + 1, 2);
  }
  return -1;
}

//this reads as: if the square root of sq is an integer (therefore a perfect square), then add 1 to the square root, and square the new number.
//ex: if the square root of 25 is an integer (it is! it's 5), then add 1 to equal 6, and square it to get 36.

console.log(findNextSquare(25));
console.log(findNextSquare(121));
console.log(findNextSquare(625));
console.log(findNextSquare(114));

//36
// 144
// 676
// -1
