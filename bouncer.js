function bouncer(arr) {
  return arr.filter(function(a){
    return Boolean(a);
  });
}

bouncer([7, "ate", "", false, 9]);
