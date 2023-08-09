// Write a function getMean that takes as parameters an array (arr) and 2 integers (x and y). The function should return the mean between the mean of the the first x elements of the array and the mean of the last y elements of the array.

// The mean should be computed if both x and y have values higher than 1 but less or equal to the array's length. Otherwise the function should return -1.

// getMean([1,3,2,4], 2, 3) should return 2.5 because: the mean of the the first 2 elements of the array is (1+3)/2=2 and the mean of the last 3 elements of the array is (4+2+3)/3=3 so the mean of those 2 means is (2+3)/2=2.5.

// getMean([1,3,2,4], 1, 2) should return -1 because x is not higher than 1.

// getMean([1,3,2,4], 2, 8) should return -1 because 8 is higher than the array's length.

function getMean(arr, x, y) {
  if (x <= 1 || y <= 1 || x > arr.length || y > arr.length) {
    return -1;
  }

  const mean1 = getFirstMean(x, arr);
  const mean2 = getSecondMean(y, arr);
  const totalMean = (mean1 + mean2) / 2;
  //mean1 = index0 up to and including index of x
  //mean2 = last index back y number of indexs

  return `${mean1} ${mean2}`;
  //return totalMean;
}

const getFirstMean = function (x, arr) {
  let total = 0;
  let divisor = 0;
  const indexX = arr.indexOf(x);

  for (let i = 0; i <= indexX; i++) {
    total += arr[i];
    divisor++;
  }

  return total / divisor;
};

const getSecondMean = function (y, arr) {
  let total = 0;
  let divisor = 0;

  for (let i = arr.length - 1; i >= arr.length - y; i--) {
    total += arr[i];
    divisor++;
  }

  return total / divisor;
};

console.log(getMean([1, 3, 2, 4], 2, 3));
//2.5
console.log(getMean([1, 3, 2], 2, 2));
//2.25
console.log(getMean([1, 3, 2, 4], 1, 2));
//-1
console.log(getMean([1, 3, 2, 4], 2, 8));
