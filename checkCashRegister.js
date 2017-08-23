function checkCashRegister(price, cash, cid) {
  cid = cid.reverse();

  const changeMap = [100.00, 20.00, 10.00, 5.00, 1.00, 0.25, 0.10, 0.05, 0.01];
  const totalCash = cid.reduce((sum, val, i) => sum + val[1], 0);

  let changeDue = cash - price;
  // Use an object, because arrays don't make sense for this use-case
  let change = {};

  if (totalCash < changeDue) {
    return 'Insufficient Funds';
  }
  else if (totalCash === changeDue) {
    return 'Closed';
  }
  else {
    for (var i = 0; i < changeMap.length; i++) {
      // While current change map denom is less than or equal to change due
      while (changeMap[i] <= changeDue) {
        // If change in drawer for current denom is greater than or equal to current changeMap
        if (cid[i][1] >= changeMap[i]) {
          // Find if change includes the current denomination
          if (change.hasOwnProperty(cid[i][0])) {
            change[cid[i][0]] += changeMap[i];
          }
          // Or, add if it doesn't exist yet
          else {
            change[cid[i][0]] = changeMap[i];
          }
          // Deduct from remaining cash in drawer
          cid[i][1] -= changeMap[i];
        }
        // Not enough cid for current denom, so need to move on
        else {
          break;
        }
        changeDue = changeDue.toFixed(2) - changeMap[i];
      }
    }
    // Check and make sure final change is valid
    if (Object.keys(change).reduce((sum, el) => sum + change[el], 0).toFixed(2) != cash - price) {
      return 'Insufficient Funds';
    }
    // If matching, return required data structure
    else {
      return Object.keys(change).map(val => [val, change[val]], []);
    }
  }
}

console.log(checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]])); // [["QUARTER", 0.50]]
console.log(checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]])); // [["TWENTY", 60.00], ["TEN", 20.00], ["FIVE", 15.00], ["ONE", 1.00], ["QUARTER", 0.50], ["DIME", 0.20], ["PENNY", 0.04]
console.log(checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1.00], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])); // Insufficient