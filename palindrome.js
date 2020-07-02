// One instance 

function palindromeVerifier(string) {
  let newString = string.replace(" ", "")
  return newString
}

// Global instance 

function palindromeVerifier(string) {
  let newString = string.replace(/ /g, "")
  let reversedString = newString.reverse()
  return reversedString
  if (reversedString === newString) {
    return true
  }
  return false;
}

console.log(palindromeVerifier("Hello my name is bella."))
console.log(palindromeVerifier("amoreroma."))