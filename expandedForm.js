// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:
// NOTE: All numbers will be whole numbers greater than 0.

// function expandedForm(num) {
//   const string = String(num);
//   let resultArr = [];
//   let count = string.length - 1;

//   for(let i = 0; i < string.length; i++) {
//     if(string[i] > 0) {
//       resultArr.push(string[i] * Math.pow(10, count));
//     }
//     count --;
//   }

//   if(resultArr.length > 1){
//     return resultArr.join(" + ")
//   }

//   return resultArr.toString()
// }

//took this solution from codewars. Uses more built in methods.
const expandedForm = (n) =>
  n
    .toString()
    .split("")
    .reverse()
    .map((a, i) => a * Math.pow(10, i))
    .filter((a) => a > 0)
    .reverse()
    .join(" + ");

//each step
// "70304"
// [7, 0, 3, 0, 4]
// [4, 0, 3, 0, 7]
// [4, 0, 300, 0, 70000]
// [4, 300, 70000]
// [70000, 300, 4]
// "70000 + 300 + 4"

//this works but it's too complicated. There must be a more mathy way!
// function expandedForm(num) {
//   const number = String(num);
//   result = "";
//   count = 0;
//   for (let e of number) {
//     count++;
//     if (Number(e) > 0) {
//       let zeros = number.length - count;
//       let target = e + "0".repeat(zeros);
//       result += `${target}`;
//       if (e !== number[number.length - 1]) {
//         result += " + ";
//       }
//     }
//   }
//   return result;
// }

console.log(expandedForm(12));
console.log(expandedForm(42));
console.log(expandedForm(70304));
console.log(expandedForm(9000000));
// Should return '10 + 2'
// Should return '40 + 2'
// Should return '70000 + 300 + 4'
