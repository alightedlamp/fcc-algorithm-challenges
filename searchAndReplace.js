// Perform a search and replace on the sentence using the arguments provided and return the new sentence. Maintain capital case of original word.

function myReplace(str, before, after) {
  return str.split(' ').map(function(word, i) {
    if (word === before) {
      if (word[0] == word[0].toUpperCase()) {
        after = after.split('');
        after.splice(0, 1, after[0].toUpperCase());
        after = after.join('');
        return after;
      }
      return after;
    }
    else {
      return word;
    }
  }).join(' ');
}

// Or! Do it in one line :D
function myReplace2(str, before, after) {
  return str.replace(before,
    before.charAt(0) === before.charAt(0).toUpperCase()
      ? after.charAt(0).toUpperCase() + after.slice(1)
      : after
  );
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped")); // A quick brown fox leaped over the lazy dog
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting")); // He is Sitting on the couch
console.log(myReplace("Let us get back to more Coding", "Coding", "algorithms")); // Let us get back to more Algorithms
console.log(myReplace2("Let us get back to more Coding", "Coding", "algorithms")); // Let us get back to more Algorithms
