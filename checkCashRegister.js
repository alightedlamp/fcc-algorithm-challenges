function checkCashRegister(price, cash, cid) {
  cid = cid.reverse();

  const changeMap = [100.00, 20.00, 10.00, 5.00, 1.00, 0.25, 0.10, 0.05, 0.01];
  const totalCash = cid.map(el => el[1]).reduce((sum, denom, i) => sum + denom);

  let changeDue = cash - price;
  console.log(`change due: ${changeDue}`);
  let change = [];

  if (totalCash < changeDue) return 'Insufficient Funds';
  else if (totalCash === changeDue) return 'Closed';
  else {
    for (var i = 0; i < changeMap.length; i++) {
      while (changeMap[i] <= changeDue) {
        if (cid[i][1] >= changeMap[i]) {
          // Find if change includes the current denomination
          if (change.filter(el => el.indexOf(cid[i][0]) > 0)) {
            // Add monies to denomination's collection
            change[change.indexOf(cid[i][0])] += changeMap[i];
          }
          // Or, add if it doesn't exist yet
          else {
            change.push([cid[i][0], changeMap[i]]);
          }
          // Deduct from remaining cash in drawer
          cid[i][1] -= changeMap[i];
        }
        changeDue -= changeMap[i];
      }
    }
    return change;
  }
}

console.log(checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]])); // [["QUARTER", 0.50]]
console.log(checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]])); // [["TWENTY", 60.00], ["TEN", 20.00], ["FIVE", 15.00], ["ONE", 1.00], ["QUARTER", 0.50], ["DIME", 0.20], ["PENNY", 0.04]