// One instance 

function palindromeVerifierInstance(string) {
  let newString = string.replace(" ", "")
  return newString
}

// Global instance 

function palindromeVerifierGlobal(string) {
  let newString = string.replace(/ /g, "")
  let stringSplit = newString.split("")
  let stringSplitReverse = stringSplit.reverse()
  let stringReverseJoin = stringSplitReverse.join("")

  if (string === stringReverseJoin) {
    return true
  }
  return false;
}

// SIMPLIFIED VERSION OF ABOVE 

function palindromeChecker(string) {
  let newString = string.replace(/ /g, "")
  return string === newString.split("").reverse().join("")
}

console.log(palindromeVerifierGlobal("Hello my name is bella"))
console.log(palindromeVerifierGlobal("amoreroma"))

console.log(palindromeChecker("amoreroma"))