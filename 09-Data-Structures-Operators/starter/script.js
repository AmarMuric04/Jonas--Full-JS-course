'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 1,
    time = 'in aprox. 15 minutes',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} ${time}`
    );
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};
// restaurant.orderDelivery({
//   time: '23:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });
restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 2,
});
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurant, hours, tags);

//Default values
const { menu = [], starterMenu: starters = [] } = restaurant;

console.log(menu, restaurant);

//Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(a, b);

//Nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
// ({ open, close } = fri);
// console.log(open, close);

// const array = [1, 2, 3];

// const a = array[0];
// const b = array[1];
// const c = array[2];

// const [x, y, z] = array;
// console.log(x, y, z);

// // const [first, second] = restaurant.categories;

// // console.log(main, second);
// let [main, , secondary] = restaurant.categories;

// console.log(main, secondary);

// // const temp = main;

// // main = secondary;
// // secondary = temp;

// // console.log(main, secondary);

// // [main, secondary] = [secondary, main];

// // console.log(main, secondary);

// console.log(restaurant.order(2, 0));
// let [starter, mainCourse] = restaurant.order(2, 0);
// [starter, mainCourse] = [mainCourse, starter];
// console.log(starter, mainCourse);

// const nested = [2, 4, [5, 6]];
// // const [q, , p] = nested;
// // console.log(q, p);

// let [i, , [j, k]] = nested;
// console.log(i, j, k);
// [j, k] = [k, j];
// console.log(i, j, k);

// //Default values

// const [o = 1, p = 1, r = 1, s = 1, t = 1] = [5, 4, 3, 2];
// console.log(o, p, r, s, t);

// //DESTRUCTURING OBJECTS
