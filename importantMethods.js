// Math.abs 
// returns the absolute value of a given number 
function difference(a, b) {
  return Math.abs(a - b);
}
// Both yield the same thing
console.log(difference(1, 7));
console.log(difference(7, 1));


// Number.isInteger(x)
// returns true of false depending on if x is an integer 
function isInteger(x) {
  if (Number.isInteger(x)) {
    return true
  }
  return false
}

// .replace(x, y) 
// Replaces something in a string with another thing- use /x/g to replace ever instance of something 
function palindromeVerifier(string) {
  let newString = string.replace(/ /g, "")
  return newString
}

console.log(palindromeVerifier("Hello my name is bella."))


// .split() 
// places a string into an array 

// .split("") 
// splits up each character into a single index of an array 


// .join() 
// joins everything in an array, including the commas, into a string

// .join("") 
// joins only the content of the indexes into a string 

// .slice(x, y) 
// copies an array starting from index x and excluding index x
const familyMembers = ["Bella", "Sam", "Caryn", "Phil"]
console.log(familyMembers.splice(1, 2))
// returns only ["Sam", "Caryn"]

// .filter() 
// filters out an array based on desired criteria specified in anon function
const names = ["Bella", "Sam"]
const result = names.filter(word => word.length >= 5)
console.log(result)

// .forEach() 
// "Iterates over a list and applies some operation with side effects to each list member"
names.forEach(name => console.log(name))
console.log(names)

// .map() 
// "Iterates over a list, transforms each member of that list, and returns another list of the same size with the transformed members "
names.map(name => console.log(name + " is my name."))

// .indexOf() 

// .splice() 

// .keys() 