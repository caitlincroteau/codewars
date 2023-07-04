//You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

// n being the length of the string array, if n = 0 or k > n or k <= 0 return "" (return Nothing in Elm, "nothing" in Erlang).

// Note
// consecutive strings : follow one after another without an interruption


// strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

// Concatenate the consecutive strings of strarr by 2, we get:

// treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
// folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
// trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
// blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
// abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

// Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
// The first that came is "folingtrashy" so 
// longest_consec(strarr, 2) should return "folingtrashy".

// In the same way:
// longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"

function longestConsec(strarr, k) {
  let longestConcat = "";

  
    for (let i = 0; i < strarr.length - 1; i++) {
      if (k === 1) {
        let concat = strarr[i];
        if (concat.length > longestConcat.length) {
          longestConcat = concat;
        }
      } else {
        let concat = ''
        for(let j = 0; j < k; j++) {
          concat += strarr[i + j]
          
        }
        console.log(concat)
      }
    } 
  

  return longestConcat;
}

console.log(longestConsec(["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], 3))
//folingtrashy
console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 3));
//abigailtheta
