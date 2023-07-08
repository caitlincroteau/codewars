// Given a string of words, you need to find the highest scoring word.
// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
// For example, the score of abad is 8 (1 + 2 + 1 + 4).
// You need to return the highest scoring word as a string.
// If two words score the same, return the word that appears earliest in the original string.
// All letters will be lowercase and all inputs will be valid.

function high(x) {
  const alphabet = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  };

  const sentence = x.split(" ");

  let highestScore = 0;
  let highestWord = "";

  for (let word of sentence) {
    let total = 0;
    for (let i of word) {
      total += alphabet[i];
    }

    if (total > highestScore) {
      highestScore = total;
      highestWord = word;
    }
  }
  return highestWord;
}

console.log(high("man i need a taxi up to ubud"));
console.log(high("what time are we climbing up the volcano"));
console.log(high("take me to semynak"));
console.log(high("aa b"));
console.log(high("b aa"));
console.log(high("bb d"));
console.log(high("d bb"));
console.log(high("aaa b"));
// // 'taxi'
// // 'volcano'
// // 'semynak'
// // 'aa'
// // 'b'
// // 'bb'
// // 'd'
// // 'aaa'

// console.log(high("jrqseckjtrdmritzcvbfdfrqgldqe ylijdmjpcynqzeyjpyaeyiqbltztd mplxcomtseuelwqmgimmpkwbqgzos eaeiwgrhnncgkyeppqipyhrzrvodt"));
//'mplxcomtseuelwqmgimmpkwbqgzos'
