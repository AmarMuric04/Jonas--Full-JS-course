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

const flight = 'LH234';
const amar = {
  name: 'Amar Muric',
  passport: 232492424,
};

function checkIn(flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr.' + passenger.name;

  passenger.passport === 232492424
    ? alert('Checked in')
    : alert('Wrong passport');
}
// checkIn(flight, amar);
// console.log(flight);
// console.log(amar);

function newPassport(person) {
  person.passport = Math.trunc(Math.random() * 1000000);
}
newPassport(amar);
checkIn(flight, amar);
//PASSING BY VALUE AND PASSING BY REFERENCE
//JAVASCRIPT DOES NOT HAVE PASSING BY REFERENCE