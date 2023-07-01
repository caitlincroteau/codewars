// Your function takes two arguments:

// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.

function twiceAsOld(dadYearsOld, sonYearsOld) {
  //1. find out how old dad was when kid was born by subtracting the kid's age from the dad's age
  //2.multiple that age by 2 to find out what age dad needs to be/target
  //3.subtract the dad's age from the target age to get the # of years
  const difference = dadYearsOld - sonYearsOld;
  const targetAge = difference * 2;
  return Math.abs(dadYearsOld - targetAge);
}

// simpler:
//return Math.abs(dadYearsOld - 2 * sonYearsOld);



console.log(twiceAsOld(36,7));
console.log(twiceAsOld(55,30));
console.log(twiceAsOld(42,21));

//22
//5
//0