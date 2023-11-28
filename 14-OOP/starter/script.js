'use strict';

const currYear = new Date().getFullYear();

const Person = function (firstName, birthYear) {
  //instane properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  //never use this!
  //   this.calcAge = function () {
  //     console.log(currYear - birthYear);
  //   };
};
``;

const amar = new Person('Amar', 2004);
// amar.calcAge()
// 1. new empty object is created
// 2. function is called(this keyword is this new empty object)
// 3. {} linked to prototype
// 4. function automatially returns {}
// console.log(typeof Person);

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1994);
console.log(amar, matilda, jack);
// amar.calcAge();
// matilda.calcAge();
// jack.calcAge();

// const jay = 'jay';

// console.log(amar instanceof Person);
// console.log(jay instanceof Person);

//prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(currYear - this.birthYear);
};

amar.calcAge();
matilda.calcAge();
jack.calcAge();

console.log(amar.__proto__);
