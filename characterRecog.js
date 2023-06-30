//Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.

function correct(string) {
  //loop through, find errors, update, return new string.
  let newString = "";

  for (let i of string) {
    if (i === "5") {
      newString += "S";
    } else if (i === "0") {
      newString += "O";
    } else if (i === "1") {
      newString += "I";
    } else {
      newString += i;
    }
  }
  return newString;
}

//USE REPLACE function with REG-EX. -g flag means 'global' replacement. Otherwise it will only replace the first instance.
function correct2(string) {
  return string.replace(/5/g, "S").replace(/0/g, "O").replace(/1/, "I");
}



console.log(correct2("L0ND0N"));
console.log(correct2("DUBL1N"));
console.log(correct2("51NGAP0RE"));
console.log(correct2("BUDAPE5T"));
console.log(correct2("PAR15"));

// "LONDON"
// "DUBLIN"
// "SINGAPORE"
// "BUDAPEST"
// "PARIS"
