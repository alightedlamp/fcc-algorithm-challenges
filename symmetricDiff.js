// Create a function that takes two or more arrays and returns an array of the symmetric difference (△ or ⊕) of the provided arrays.
// The mathematical term "symmetric difference" of two sets is the set of elements which are in either of the two sets, but not in both

function sym(args) {
  var diffArrays = function(arr1, arr2) {
    function filterFunc(arr1, arr2) {
      return arr1.filter(el => {
        return arr2.indexOf(el) === -1;
      })
    }

    return filterFunc(arr1, arr2).concat(filterFunc(arr2, arr1));
  }

  args = Array.prototype.slice.call(arguments).reduce(diffArrays, []);
  return args.filter((el, pos) => args.indexOf(el) == pos);
}

console.log(sym([1, 2, 3], [5, 2, 1, 4])); // 5, 3, 4
console.log(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5])); // 1, 4, 5
