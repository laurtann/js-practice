//Implement a function that reverses a string using iteration...and then recursion!
function reverseStringIt(str) {
  return str.split("").reverse().join("");
}

function reverseStringRec(str) {
  if (str === "") {
    return "";
  } else {
    return reverseStringRec(str.substr(1)) + str.charAt(0);
  }
}

console.log(reverseStringIt('yoyo mastery'));
console.log(reverseStringRec('yoyo mastery'));
//should return: 'yretsam oyoy'