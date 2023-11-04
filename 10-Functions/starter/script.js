'use strict';
const bookings = [];
function createBooking(
  flightNum,
  numPassngers = 0,
  price = 199 * numPassngers
) {
  // numPassngers = numPassngers || 1;
  // price = price || 199; ES 5

  const booking = {
    flightNum,
    numPassngers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
}
createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 4);
createBooking('LH123', undefined, 4);
