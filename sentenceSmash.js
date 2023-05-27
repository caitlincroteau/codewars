// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

//needs to be empty if array is empty!

// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'

function smash(words) {
  if (words.length === 0) {
    return "";
  }
  let result = "";
  for (let i = 0; i < words.length; i++) {
    if (words[i] === words[words.length - 1]) {
      result += words[i];
    } else {
      result += words[i] + " ";
    }
  }
  return result + "!";
}

const words1 = ["hello", "world", "this", "is", "great"];
//returns   =>  'hello world this is great'

console.log(smash(words1));
//6mins 40 seconds

function smash2(words) {
  if (words.length === 0) {
    return "";
  }
  let result = "";
  words.map((word) => {
    if (word !== words[words.length - 1]) result += word + " ";
  });
  return result + words[words.length - 1] + "!";
}

console.log(smash2(words1));
//5mins 45seconds

function smash3(words) {
  return words.join(" ") + "!";
}

console.log(smash3(words1));
