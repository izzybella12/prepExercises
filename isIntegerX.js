function isInteger(x) {
  if (Number.isInteger(x)) {
    return true
  }
  return false
}

console.log(isInteger(1))
console.log(isInteger("Hello"))


function isIntegerTypeOf(x) {
  if (typeof x === "number") {
    return true
  }
  return false
}

console.log(isIntegerTypeOf(2))
console.log(isIntegerTypeOf("World"))