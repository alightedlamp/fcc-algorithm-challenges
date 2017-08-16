// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

function addTogether() {
  return false;
}

addTogether(2,3); // 5
addTogether(2)(3); // 5
addTogether(2, '3'); // undefined
addTogether(2)([3]); // undefined