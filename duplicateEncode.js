// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

function duplicateEncode(word) {
  const lowerCaseWord = word.toLowerCase();
  const letters = makeObject(lowerCaseWord);
  let result = "";

  for (let i of lowerCaseWord) {
    if (letters[i] > 1) {
      result += ")";
    } else {
      result += "(";
    }
  }
  return result;
}

const makeObject = function (word) {
  const letters = {};

  for (let i of word) {
    if (i in letters) {
      letters[i]++;
    } else {
      letters[i] = 1;
    }
  }
  return letters;
};

console.log(duplicateEncode("din"));
console.log(duplicateEncode("recede"));
console.log(duplicateEncode("Success"));
console.log(duplicateEncode("(( @"));

// "((("
// "()()()"
// ")())())"
// "))(("

// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!
