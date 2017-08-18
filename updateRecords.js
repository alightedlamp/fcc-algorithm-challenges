// Setup
var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [
        "Let It Rock",
        "You Give Love a Bad Name"
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [
        "1999",
        "Little Red Corvette"
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {
  collection = collectionCopy;

  if (prop !== 'tracks' && value.length > 0) {
    collection[id][prop] = value;
  }
  // If tracks don't yet exist, create empty array, add value to array
  else if (prop === 'tracks' && !collection[id].hasOwnProperty('tracks')) {
    collection[id][prop] = [value];
  }
  // Add track onto end of album's tracks array
  else if (prop === 'tracks' && value.length > 0) {
    collection[id][prop].push(value);
  }
  // Delete given prop -- seems dangerous, but I'm just doing what they tell me
  else if (value.length === 0) {
    delete collection[id][prop];
  }
  return collection;
}

// console.log(updateRecords(5439, "artist", "ABBA"));
// console.log(updateRecords(5439, "tracks", "Take a Chance on Me"));
// console.log(updateRecords(1245, "tracks", "Addicted to Love"));
console.log(updateRecords(2468, "tracks", "Free"));
