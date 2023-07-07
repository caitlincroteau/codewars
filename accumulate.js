// This time no story, no theory. The examples below show you how to write function accum:
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
  let result = "";
  const lower = s.toLowerCase();

  for (let i = 0; i < s.length; i++) {
    result += lower[i].toUpperCase();
    result += lower[i].repeat(i);
    if (i !== s.length - 1) {
      result += "-";
    }
  }
  return result;
}

//Here is an example of using map (taken from codewars page)

// function accum(s) {
// 	return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
// }

console.log(accum("abcd"));
console.log(accum("RqaEzty"));
console.log(accum("cwAt"));

// "A-Bb-Ccc-Dddd"
// "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// "C-Ww-Aaa-Tttt"
