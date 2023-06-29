//Count the number of divisors of a positive integer n.
//Random tests go up to n = 500000.

// Examples (input --> output)
// 4 --> 3 // we have 3 divisors - 1, 2 and 4
// 5 --> 2 // we have 2 divisors - 1 and 5
// 12 --> 6 // we have 6 divisors - 1, 2, 3, 4, 6 and 12
// 30 --> 8 // we have 8 divisors - 1, 2, 3, 5, 6, 10, 15 and 30
// Note you should only return a number, the count of divisors. The numbers between parentheses are shown only for you to see which numbers are counted in each case.

//THIS TOOK TOO LONG TO RUN IN CODEWARS :(
//because it checks EVERY number in the list
function getDivisorsCnt(n) {
  let divisors = 0;
  //loop to up/including n
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      divisors++;
    }
  }

  return divisors;
}

// console.log(getDivisorsCnt(1));
// console.log(getDivisorsCnt(4));
// console.log(getDivisorsCnt(5));
// console.log(getDivisorsCnt(12));
// console.log(getDivisorsCnt(30));
console.log(getDivisorsCnt(36));
//9
//squrroot = 6

// console.log(getDivisorsCnt(500000));

// console.log(getDivisorsCnt2(1));
// console.log(getDivisorsCnt2(4));
// console.log(getDivisorsCnt2(5));
// console.log(getDivisorsCnt2(12));
// console.log(getDivisorsCnt2(30));
// console.log(getDivisorsCnt2(500000));

//https://stackoverflow.com/questions/73922946/how-to-return-all-the-divisors-from-a-big-integer

// To find all divisors (both prime factors and composite divisors), you can approach the problem from several directions:
// The simplest is probably to do what @Nick's answer suggests: try all candidates i from 1 to sqrt(N), and whenever you find one, add both i and n / i to the list.
// As a minor improvement to that, you could start at i = 2, and always add 1 and n to the list without checking (because every integer is divisible by 1 and by itself).

// An alternative that's probably faster, but also more complicated to implement, is to find the prime factors first (see (2)), and then build the set of all divisors as the powerset of the prime factors. For example, if you find that the prime factors are [2, 3, 5], then the set of divisors is [1, 2, 3, 5, 2*3, 2*5, 3*5, 2*3*5]. (Note that this will need some deduplication when some prime factors occur more than once.)

// If performance is really important, there's more you could do. For example, you could cache prime numbers you've found, and on subsequent invocations only check those as possible divisors.
// A very simple step in this direction would be to special-case i=2, and then check only odd candidates (3, 5, 7, ...) afterwards. That simple trick would save about half the work!
// One can even go as far as getting rid of expensive divisions entirely at the cost of spending some more memory to keep track of the next multiple of each prime that needs to be checked... but that's getting a bit far from your original question! Before getting too carried away with optimizations, I'd like to point out that for a single invocation, even for an input like 975179493674, any such tuning isn't worth the effort: you'd save a couple of milliseconds of execution time, but it would cost at least several minutes to implement. However, if this happens to be a performance-critical core part of an application, then it provides quite some room for investing implementation effort in order to save execution time.
