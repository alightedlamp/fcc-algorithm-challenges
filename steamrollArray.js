function steamrollArray(arr) {
  return arr.reduce((flattened, next) => {
    return flattened.concat(Array.isArray(next) ? steamrollArray(next) : next);
  }, []);
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));
console.log(steamrollArray([[["a"]], [["b"]]]));
console.log(steamrollArray([1, [], [3, [[4]]]]));
console.log(steamrollArray([1, {}, [3, [[4]]]]));
