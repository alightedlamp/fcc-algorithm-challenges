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
