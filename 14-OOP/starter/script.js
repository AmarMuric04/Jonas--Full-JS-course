'use strict';

// const currYear = new Date().getFullYear();

const Person = function (firstName, birthYear) {
  //instane properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  //never use this!
  //   this.calcAge = function () {
  //     console.log(currYear - birthYear);
  //   };
};
Person.hey = function () {
  console.log('hey there 🧡');
};
Person.hey();

const amar = new Person('Amar', 2004);
// amar.hey();
// // amar.calcAge()
// // 1. new empty object is created
// // 2. function is called(this keyword is this new empty object)
// // 3. {} linked to prototype
// // 4. function automatially returns {}
// // console.log(typeof Person);

// const matilda = new Person('Matilda', 2017);
// const jack = new Person('Jack', 1994);
// console.log(amar, matilda, jack);
// // amar.calcAge();
// // matilda.calcAge();
// // jack.calcAge();

// // const jay = 'jay';

// // console.log(amar instanceof Person);
// // console.log(jay instanceof Person);

// //prototypes
// console.log(Person.prototype);

// Person.prototype.calcAge = function () {
//   console.log(currYear - this.birthYear);
// };

// amar.calcAge();
// matilda.calcAge();
// jack.calcAge();

// console.log(amar.__proto__);
// console.log(amar.__proto__ === Person.prototype);

// console.log(Person.prototype.isPrototypeOf(amar));
// console.log(Person.prototype.isPrototypeOf(Person));

// Person.prototype.species = 'Homo Sapiens';

// console.log(amar.species, matilda.species);
// console.log(amar.hasOwnProperty('firstName'));
// console.log(amar.hasOwnProperty('species'));

// console.log(Person.prototype.constructor);

// console.log(amar.__proto__);
// //object.prototype
// console.log(amar.__proto__.__proto__);
// // null
// console.log(amar.__proto__.__proto__.__proto__);

// console.dir(Person.prototype.constructor);

// const arr = [3, 6, 4, 2, 3, 4, 6, 9, 0]; // new Array === []
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);
// console.log(arr.__proto__.__proto__);

// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };
// console.log(arr.unique());

// const h1 = document.querySelector('h1');
// console.log(h1.__proto__);

// console.dir(x => x + 1);

//class expression
// const PersonCl = class {};

//class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  //methos will be added to .prototype propert y
  calcAge() {
    console.log(2023 - this.birthYear);
  }
  greet() {
    console.log(`hey ` + this.fullName);
  }

  get age() {
    return 2023 - this.birthYear;
  }

  //set a property that already exists
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) {
      this._fullName = name;
    } else alert(`${name} is not a full name`);
  }
  get fullName() {
    return this._fullName;
  }
  //static method
  static hey() {
    console.log('hey there 💨');
    console.log(this);
  }
}
PersonCl.hey();
const jessica = new PersonCl('Amar Muric', 2005);
console.log(jessica.age, 123);

// jessica.hey();

console.log(jessica);
console.log(jessica.fullName);

jessica.calcAge();

console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//   console.log(`hey ` + this.firstName);
// };

jessica.greet();

// 1.Classes are not hoisted
// 2.Classes are first class citizens
// 3.Classes are executed in strict mode

const walter = new PersonCl('Walter White', 2005);

console.log(walter.fullName);

//getter and setter properties
const account = {
  owner: 'amar',
  movements: [1, 2, 3, 4, 5, 6, 7, 2, 98, 213, 4123, 124],

  get latest() {
    return this.movements[this.movements.length - 1];
  },
  set latest(mov) {
    this.movements.push(mov);
  },
};
console.log(account.latest);
console.log((account.latest = 123));
console.log(account.movements);

Array.from(document.querySelectorAll('h1'));

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 1986;
steven.calcAge();

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('sarah', 2004);
sarah.calcAge();
console.log(sarah);
