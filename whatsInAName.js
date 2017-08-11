// UGLY BRUTE FORCE
function whatIsInAName(collection, source) {
  var arr = [];

  for (var i = 0; i < collection.length; i++) {
    var obj = collection[i];
    var match = {};

    Object.keys(source).filter(function(key) {
      if (obj.hasOwnProperty(key) && source[key] === obj[key]) {
        // add key value to new obj
        match = obj;
      }
      else if (!obj.hasOwnProperty(key)) {
        // dump object and return
        match = {};
        return;
      }
    })
    if (Object.keys(match).length) {
      arr.push(match);
    }
  }
  return arr;
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
console.log(whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 }));

// LOOPLESS ES6
const whatIsInAName2 = (collection, source) =>
  collection.filter((obj) => Object.keys(source)
    .map((key) => obj.hasOwnProperty(key) && obj[key] === source[key])
    .reduce((a, b) => a && b)
  );

console.log(whatIsInAName2([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
console.log(whatIsInAName2([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 }));