// Make a person

var Person = function(firstAndLast) {
  var fullName = firstAndLast;

  this.getFirstName = () => fullName.split(' ')[0];
  this.getLastName = () => fullName.split(' ')[1];
  this.getFullName = () => fullName;

  this.setFirstName = (first) => fullName = `${first} ${fullName.split(' ')[1]}`;
  this.setLastName = (last) => fullName = `${fullName.split(' ')[0]} ${last}`;
  this.setFullName = (name) => fullName = name;
};

var bob = new Person('Bob Ross');
console.log(bob.getFullName());
console.log(Object.keys(bob).length);
console.log(bob instanceof Person);
console.log(bob.setFirstName("Haskell"));
console.log(bob.getFullName());
console.log(bob.setLastName('Curry'));
console.log(bob.getFullName());