// Math.abs 
// returns the absolute value of a given number 

function difference(a, b) {
  return Math.abs(a - b);
}

console.log(difference(1, 7));
console.log(difference(7, 1));
// Both yield the same thing

///////////////////////////////////////////////////

// Number.isInteger(x)
// returns true of false depending on if x is an integer 

function isInteger(x) {
  if (Number.isInteger(x)) {
    return true
  }
  return false
}

///////////////////////////////////////////////////

// Replaces something in a string with another thing- use /x/g to replace ever instance of something 
function palindromeVerifier(string) {
  let newString = string.replace(/ /g, "")
  return newString
}

console.log(palindromeVerifier("Hello my name is bella."))

///////////////////////////////////////////////////


