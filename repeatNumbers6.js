[[1, 2], [2, 3]];

const repeatNumbers = function(data) {

  let number = "";

  data.forEach((array, index) => {
    for (let i = 0; i < array[1]; i++) {
      number += array[0]
      if ((index !== data.length-1) && (i === array[1] - 1)) {
        number += ", "
      }
    }
  })

  return number
};


console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));

