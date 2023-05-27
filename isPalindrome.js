// Is it a palindrome?
// Write a function that checks if a given string (case insensitive) is a palindrome. A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar, the date and time 12/21/33 12:21, and the sentence: "A man, a plan, a canal – Panama".

///this will work if it's just letters or numbers - no space or special chars.
function isPalindrome(string) {
  const lowerCaseStr = string.toLowerCase();
  const splitStr = lowerCaseStr.split("").reverse().join("");
  if (splitStr === lowerCaseStr) {
    return true;
  }
  return false;
}

//more succinct
function isPalindrome2(string) {
  return string.toLowerCase() ===
    string.toLowerCase().split("").reverse().join("")
    ? true
    : false;
}

const string1 = "racecar";
const string4 = "madam";
const string5 = "Bob";
console.log(isPalindrome(string1));
console.log(isPalindrome(string4));
console.log(isPalindrome(string5));

// const string2 = "A man a plan a canal Panama";
// const string3 = "12/21/33 12:21";
// console.log(isPalindrome(string2));
// console.log(isPalindrome(string3));

console.log(isPalindrome2(string1));
console.log(isPalindrome2(string4));
console.log(isPalindrome2(string5));
