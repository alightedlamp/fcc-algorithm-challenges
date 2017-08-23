// Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item.

function updateInventory(arr1, arr2) {
    // Concat inventory options, reduce to object keys for easier manipulation
    const inventory = arr1.concat(arr2).reduce((acc, curr) => {
        // If key doesn't exist, add it
        if (!acc[curr[1]]) {
            acc[curr[1]] = curr[0];
        }
        // Otherwise, add to key's current value
        else {
            acc[curr[1]] += curr[0];
        }
        return acc;
    }, {});

    // Sort keys alphabetically, push everything to an array in required format
    return Object.keys(inventory).sort().reduce((acc, curr) => {
        acc.push([inventory[curr], curr]);
        return acc;
    }, []);
}

console.log(updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]])); // [[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]])