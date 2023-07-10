function binaryCalculator(num1, num2) {
  const result = [];
  let carryOver = 0;
  const array1 = num1.split("");
  const array2 = num2.split("");

  //set arrays if the input strings are of different lengths
  if (num1.length > num2.length) {
    let zeros = num1.length - num2.length;
    while (zeros > 0) {
      array2.splice(0, 0, 0);
      zeros--;
    }
  }
  if (num1.length < num2.length) {
    let zeros = num2.length - num1.length;
    while (zeros > 0) {
      array1.splice(0, 0, "0");
      zeros--;
    }
  }

  //loop through arrays and calculate
  for (let i = array1.length - 1; i >= 0; i--) {
    let sum = Number(array1[i]) + Number(array2[i]) + carryOver;
    if (sum === 0) {
      result.push(sum);
      carryOver = 0;
    } else if (sum === 1) {
      result.push(sum);
      carryOver = 0;
    } else if (sum === 2) {
      result.push(0);
      carryOver = 1;
    } else {
      result.push(1);
      carryOver = 1;
    }
  }
  const binaryResult = result.reverse().join("");
  const decimalResult = parseInt(binaryResult, 2);

  return decimalResult;
}

console.log(binaryCalculator("011110", "010100"));
// 110010
// 50
// 20 + 30

console.log(binaryCalculator("01100", "0101"));
// 010001
// 17
// 12 + 5

console.log(binaryCalculator("0101000001", "01111011"));
// 0110111100
// 444
// 123+ 321
