// Create a function that takes two or more arrays and returns an array of the symmetric difference (△ or ⊕) of the provided arrays.
// The mathematical term "symmetric difference" of two sets is the set of elements which are in either of the two sets, but not in both

function sym(args) {
  var diffArrays = function(arr1, arr2) {
    function filterArrays(arr1, arr2) {
      return arr1.filter(el => {
        return arr2.indexOf(el) === -1;
      })
    }

    return filterArrays(arr1, arr2).concat(filterArrays(arr2, arr1));
  }

  // Robust remove-duplicates function for the hell of it
  function uniqueArray(arr) {
    const prims = {'number': {}, 'boolean': {}, 'string': {}}, objs = [];

    return arr.filter(el => {
      let type = typeof el;
      if (type in prims) {
        return prims[type].hasOwnProperty(el) ? false : prims[type][el] = true;
      }
      else {
        return objs.indexOf(el) >= 0 ? false : objs.push(el);
      }
    })
  }

  return uniqueArray(Array.prototype.slice.call(arguments).reduce(diffArrays, []));
}

console.log(sym([1, 2, 3], [5, 2, 1, 4])); // 3, 5, 4
console.log(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5])); // 1, 4, 5
