function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;

  return arr.map(obj => {
    let op = Math.round((2 * Math.PI) * Math.sqrt((Math.pow(earthRadius + obj.avgAlt, 3) / GM)));
    return {
      name: obj.name,
      orbitalPeriod: op
    }
  });
}

console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));
