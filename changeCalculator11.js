
// Takes two numbers, the total of a transaction, and the amount of cash given
// The two numbers are whole numbers (no decimals)

const calculateChange = function(total, cash) {
  let change = {};
  returnValue = cash - total



  return returnValue

  // let decimal = returnValue/100 - Math.floor(returnValue/100)
  // let centValue = decimal.toFixed(2) * 100
  // if (centValue % 25){
  // }

};

// check for first decimal

console.log(calculateChange(1787, 2000)); 
// { twoDollar: 1, dime: 1, penny: 3 }
console.log(calculateChange(2623, 4000)); 
// { tenDollar: 1, twoDollar: 1, oneDollar: 1, quarter: 3, penny: 2 }
console.log(calculateChange(501, 1000)); 
// { twoDollar: 2, quarter: 3, dime: 2, penny: 4 }



