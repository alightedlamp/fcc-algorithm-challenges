function uniteUnique(arr) {
  return Array.prototype.slice.call(arguments)
    .reduce((united, value) => united.concat(value
    .filter((i) => united.indexOf(i) === -1)));
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
