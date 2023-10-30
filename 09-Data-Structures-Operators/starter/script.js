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
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`here is ur delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
  },
  orderPizza(mainIngrediant, ...otherIngrediats) {
    if (otherIngrediats.length === 0) {
      otherIngrediats = 'nothing else';
    }
    console.log(
      `Your pizza with ${mainIngrediant} and ${otherIngrediats} has been delivered!`
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
// restaurant.orderDelivery({
//   address: 'Via del Sole, 21',
//   starterIndex: 2,
// });
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurant, hours, tags);

// //Default values
// const { menu = [], starterMenu: starters = [] } = restaurant;

// console.log(menu, restaurant);

// //Mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj);
// console.log(a, b);

// //Nested objects
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);
// // ({ open, close } = fri);
// // console.log(open, close);

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

// //DESTRUCTURING OBJECTS UP ABOVE

// const arr = [7, 8, 9];
// // const arr2 = [1, 2, 3];
// const badNewArray = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArray);

// //SPREAD OPERATOR
// const newArray = [1, 2, ...arr];
// console.log(newArray);
// console.log(...newArray);

// const newMenu = [...restaurant.mainMenu, 'Gnocci', 'Birijan', 'Tursija'];
// console.log(newMenu);

// // let arr3 = arr.concat(arr2);
// // console.log(arr3);
// // arr3 = [...arr, ...arr2];
// // console.log(arr3);

// //copy array

// const mainMenuCopy = [...restaurant.mainMenu];

// //join 2 arrays

// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);
// //Iterables are arrays, strings, maps and sets, but not OBJECTS.
// const str = 'Amar';
// const letters = [...str];
// console.log(letters);
// console.log(...str);
// // const openingHoursCopy = { ...restaurant.openingHours };
// // console.log(openingHoursCopy);

// //real world example
// // const ingrediants = [
// //   prompt('First ingrediant'),
// //   prompt('Second ingrediant'),
// //   prompt('Ingrediant 3'),
// // ];

// // console.log(ingrediants);
// // restaurant.orderPasta(...ingrediants);

// //objects
// const restaurantCopy = { foundedIn: 2004, ...restaurant, status: 'Closed' };
// console.log(restaurantCopy);

// const objectCopy = { ...restaurant };
// objectCopy.name = 'Murgin kafic';
// console.log(objectCopy);
// console.log(restaurant);

//DESTRUCTURING

// //SPREAD because its on the right side of the assignment operator
// const array = [1, 2, ...[3, 4]];
// console.log(array);

// //REST because is on the left side of the assignment operator
// const [a, , b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, , risotto, ...othersFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, othersFood);

// //Objects

// const { thu, fri, ...otherObjects } = restaurant.openingHours;
// console.log(thu, fri, otherObjects);
// const { sat, ...weekDays } = restaurant.openingHours;
// console.log(sat, weekDays);

// //FUNCTIONS
// let seperateNumbers = [];
// function add(...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// }
// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

// const x = [23, 5, 7];
// add(...x);
// console.log(...x);

// restaurant.orderPizza('mushrooms', 'olives', ' pineapples');
// restaurant.orderPizza('mushrooms');
// const array1 = [1, 2, 3, 4];
// const array2 = [1, 2, 3, ...array1];

// let [first, second, third, ...otherNumbers] = array2;
// const array3 = [first, second, otherNumbers];
// console.log(array2, array3);

// [first, second] = [first, third];
// console.log(first, second, 2, otherNumbers);

// function spoji(...reci) {
//   return reci.join(', ');
// }
// console.log(spoji('Amar', 'Muric', 'Murga'));

// //spread can be anywhere, but rest can only be last
// // const niz1 = [5, 6, 7];
// // const niz = [1, 2, 3, 4, ...niz1, 8, 9, 10];
// // console.log(niz);
// // const [frst, scnd, thrd, ...otherNums] = niz;
// // const niz3 = [frst, scnd, thrd, otherNums];

// // console.log(...niz3);

// // let [one, two, three, four, five, six, seven, eight, nine, ...ostali] = niz3;
// // ostali = four;
// // const niz4 = [one, two, three, four, five, six, seven, eight, nine, ostali];
// // console.log(niz4);
