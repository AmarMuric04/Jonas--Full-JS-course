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
console.log(amar.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(amar));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = 'Homo Sapiens';

console.log(amar.species, matilda.species);
console.log(amar.hasOwnProperty('firstName'));
console.log(amar.hasOwnProperty('species'));

console.log(Person.prototype.constructor);

console.log(amar.__proto__);
//object.prototype
console.log(amar.__proto__.__proto__);
// null
console.log(amar.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 6, 4, 2, 3, 4, 6, 9, 0]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique());

const h1 = document.querySelector('h1');
console.log(h1.__proto__);

console.dir(x => x + 1);
