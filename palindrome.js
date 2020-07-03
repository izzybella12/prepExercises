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

console.log(palindromeVerifierGlobal("Hello my name is bella"))
console.log(palindromeVerifierGlobal("amoreroma"))