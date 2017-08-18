// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

function addTogether() {
  const checkNum = (x) => typeof x === 'number' ? x : undefined;
  const x = arguments[0];
  const y = arguments[1];

  switch (arguments.length) {
    case 1:
      if (checkNum(x)) {
        const addTwo = function(y) {
          if (checkNum(y)) {
            return x + y;
          }
          else {
            return undefined;
          }
        };
        return addTwo;
      }
      else {
        break;
      }

    case 2:
      if (checkNum(x) && checkNum(y)) {
        return x + y;
      }
      else {
        break;
      }

    default:
      return undefined;
  }
}

console.log(addTogether(2,3)); // 5
console.log(addTogether(2)(3)); // 5
console.log(addTogether(2, '3')); // undefined
console.log(addTogether(2)([3])); // undefined
console.log(addTogether("http://bit.ly/IqT6zt"));