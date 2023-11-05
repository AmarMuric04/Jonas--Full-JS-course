'use strict';
// const bookings = [];
// function createBooking(
//   flightNum,
//   numPassngers = 0,
//   price = 199 * numPassngers
// ) {
//   // numPassngers = numPassngers || 1;
//   // price = price || 199; ES 5

//   const booking = {
//     flightNum,
//     numPassngers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// }
// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 4);
// createBooking('LH123', undefined, 4);

// const flight = 'LH234';
// const amar = {
//   name: 'Amar Muric',
//   passport: 232492424,
// };

// function checkIn(flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr.' + passenger.name;

//   passenger.passport === 232492424
//     ? alert('Checked in')
//     : alert('Wrong passport');
// }
// // checkIn(flight, amar);
// // console.log(flight);
// // console.log(amar);

// function newPassport(person) {
//   person.passport = Math.trunc(Math.random() * 1000000);
// }
// newPassport(amar);
// checkIn(flight, amar);
//PASSING BY VALUE AND PASSING BY REFERENCE
//JAVASCRIPT DOES NOT HAVE PASSING BY REFERENCE

// function oneWord(str) {
//   return str.replace(/ /g, '').toLowerCase();
// }
// console.log(oneWord('ide gas nece stati'));

// function upperFirstWord(str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// }
// console.log(upperFirstWord(' Ide gas ale ale'));

// //higher order function
// function transformer(str, fn) {
//   console.log(`Original string ${str}`);
//   console.log(`Transformed string ${fn(str)}`);
//   console.log(`Transformed by: ${fn.name}`);
// }

// transformer('Javascript is the best!!!', upperFirstWord);
// transformer('Javascript is the best!!!', oneWord);

// const high5 = function () {
//   console.log(`¯\_(ツ)_/¯`);
// };
// document.body.addEventListener('click', high5);
// const array = ['Amar', 'Murga', 'Muric'].forEach(high5); //value => {
// //   console.log(value.toLowerCase());
// // }

// function greet(greeting) {
//   return function (name) {
//     console.log(`${greeting}, ${name}`);
//   };
// }

// const greetWithHey = greet('Hey');
// greetWithHey('Amar');
// greetWithHey('Bro');
// greet('Hey')('Murga');

// //Challenge
// const greetArrow = greeting => name => console.log(`${greeting}, ${name}`);

// greetArrow('Hello')('Murga');
// function book(flightNum, name) {
//   console.log(
//     `${name} booked a seat on ${this.airline} Air Lines flight ${this.iataCode}${flightNum}`
//   );
//   this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
// }
// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
// };
// // lufthansa.book(239, 'Amar Muric');
// // lufthansa.book(635, 'John Doe');
// // console.log(lufthansa);

// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };

// //THIS DOES NOT WORK!
// // book(23, 'Muric Amar');

// //call method
// // book.call(eurowings, 23, 'Sarah Williams');
// // book.call(lufthansa, 23, 'Sarah Williams');
// // console.log(eurowings.bookings);

// const swiss = {
//   airline: 'Swiss',
//   iataCode: 'LX',
//   bookings: [],
// };
// // book.call(swiss, 23, 'Sarah Williams');

// //apply method
// const flightData = [583, 'George Cooper'];
// // book.apply(lufthansa, flightData);
// // book.call(lufthansa, ...flightData);

// //bind method

// const bookEurowings = book.bind(eurowings);
// const bookLufthansa = book.bind(lufthansa);
// const bookSwiss = book.bind(swiss);

// // bookEurowings('44-2', 'Steven Williams');
// // bookLufthansa(332, 'Murga');
// // bookSwiss(332, 'Brat');
// // const name = prompt('Enter your name:');
// const bookEW23 = book.bind(eurowings, 23);
// bookEW23('Murgalone');
// bookEW23(name);

// //With event listeners
// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);

//   this.planes++;
//   console.log(this.planes);
// };
// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// //partial application
// const addTaxOne = (rate, value) => value + value * rate;
// const addVATone = addTaxOne.bind(null, 0.23);

// console.log(addVATone(23));

// const addTax = rate => value => value + value * rate;

// const addVAT = addTax(0.23);

// console.log(addVAT(23));

//IIFE

function runOnce() {
  console.log('This will never run again.');
}
runOnce();

(function () {
  console.log('This will never run again.');
})();

(() => console.log('This will ALSO never run again.'))();

{
  const isPrivate = 23;
  var notPrivate = 23;
}
// console.log(isPrivate);
console.log(notPrivate);
