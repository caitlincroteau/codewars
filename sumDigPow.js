//Take a Number And Sum Its Digits Raised To The Consecutive Powers And ....¡Eureka!!

// The number 89 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata. What's the use of saying "Eureka"? Because this sum gives the same number:
// 89=8pow(1)+9pow(2)

// The next number in having this property is 135:

// See this property again:

// 135 = 1pow(1)+3pow(2)+5(3)

// Task
// We need a function to collect these numbers, that may receive two integers
// a, b that defines the range [a,b](inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.

function sumDigPow(a, b) {
  const result = [];
  for (let i = a; i <= b; i++) {
    const nums = String(i).split("");
    const total = nums.reduce(
      (sum, num, index) => sum + Math.pow(num, index + 1),
      0
    );
    if(total === i) {
      result.push(total);
    }
  }
  return result;
}

//reduce takes and object aka starting point for the sum
//ie the 0 in the above example is the same as the sum you pass to the function
//more on reduce in this video:
//https://www.youtube.com/watch?v=Wl98eZpkp-c&ab_channel=FunFunFunction

console.log(sumDigPow(1, 10));
console.log(sumDigPow(1, 100));
console.log(sumDigPow(90, 100));

//  --> [1, 2, 3, 4, 5, 6, 7, 8, 9]
//  --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
// If there are no numbers of this kind in the range [a,b] the function should output an empty list.
//  --> []
