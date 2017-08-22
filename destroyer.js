function destroyer(arr) {
  var args = Array.from(arguments).slice(1, arguments.length);
  return arr.filter(function(a) {
    return !args.includes(a);
  });
}
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
