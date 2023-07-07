// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

// Rules for a smiling face:

// Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// Every smiling face must have a smiling mouth that should be marked with either ) or D
// No additional characters are allowed except for those mentioned.

// Valid smiley face examples: :) :D ;-D :~)
// Invalid smiley faces: ;( :> :} :]

//return the total number of smiling faces in the array

function countSmileys(arr) {
  const validFaces = [
    ":)",
    ":D",
    ";)",
    ";D",
    ":-)",
    ":-D",
    ":~)",
    ":~D",
    ";-)",
    ";-D",
    ";~)",
    ";~D",
  ];
  let total = 0;
  for (let e of arr) {
    if (validFaces.includes(e)) {
      total++;
    }
  }
  return total;
}

console.log(countSmileys([";("]));
console.log(countSmileys([":)", ";(", ";}", ":-D"]));
console.log(countSmileys([";D", ":-(", ":-)", ";~)"]));
console.log(countSmileys([";]", ":[", ";*", ":$", ";-D"]));
// should return 0;
// should return 2;
// should return 3;
// should return 1;

const eyes = [":", ";"]; //required
const nose = ["-", "~"]; //optional
const mouth = [")", "D"]; //required
