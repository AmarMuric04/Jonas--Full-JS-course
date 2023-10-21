// "use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("i can drive :D");

// // const interface = "Audio";
// // const private = 123;
// // const if = 123;

// function logger() {
//   console.log("My name is Amar");
// }

// // Calling / Running / Invoking the function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   // console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//   return juice;
// }
// //things inside the brackets are called the arguments

// // const appleJuice = fruitProcessor(5, 0);
// // console.log(appleJuice);

// console.log(fruitProcessor(5, 0));

// // const appleOrangeJuice = fruitProcessor(2, 4);
// /  console.log(appleOrangeJuice);

// console.log(fruitProcessor(2, 4));

// const num = Number("24");
// console.log(num);

// //practice

// function addition(a, b, c, d) {
//   return (((a * a) / b) * b * a) / c + (a * a * b) / c;
// }

// console.log(addition(72, 33, 72, 91));

// //function declaration
// function calcAge1(birthyear) {
//   return 2037 - birthyear;
// }

// // const age1 = calcAge1(2004);
// // console.log(age1);

// console.log(calcAge1(2004));

// //Anonymous function / function expression
// const calcAge2 = function (birthyear) {
//   return 2037 - birthyear;
// };

// // const age2 = calcAge2(2004);
// // console.log(age2);

// console.log(calcAge1(2004));

// console.log(age1, age2);

// // //Arrow Functions

// //expression
// const calcAge2 = function (birthyear) {
//   return 2037 - birthyear;
// };

// //Arrow function
// const calcAge3 = (birthyear) => 2037 - birthyear;

// // const age3 = calcAge3(2004);
// // console.log(age3);

// console.log(calcAge3(2004));

// const yearsUntilRetirement = (birthyear, firstName) => {
//   const age = 2037 - birthyear;
//   const retirement = 65 - age;
//   //return retirement;
//   return `${firstName} retires in ${retirement} years`;
// };

// // const retire = yearsUntilRetirement(2004, "Amar");
// // console.log(retire);

// console.log(yearsUntilRetirement(2004, "Amar"));
// console.log(yearsUntilRetirement(1995, "Lazar"));

// //A Function calling another function inside
// function cutFruitPieces(fruit) {
//   return fruit * 3;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);
//   const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces`;
//   return juice;
// }
// console.log(fruitProcessor(2, 3));

// const calcAge = function (birthyear) {
//   return 2037 - birthyear;
// };

// const yearsUntilRetirement = function (birthyear, firstName) {
//   const age = calcAge(birthyear);
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     //return immediatelly stops an if statement.

//     console.log(`${firstName} retires in ${retirement} years`);
//     return retirement;
//   } else {
//     console.log(`${firstName} has already retired`);
//     return -1;
//   }

//   return retirement;
//   //   return `${firstName} retires in ${retirement} years`;
// };

// console.log(yearsUntilRetirement(2004, "Amar"));
// console.log(yearsUntilRetirement(1950, "Murga"));

//ARRAYS

// const friend1 = "Michael";
// const friend2 = "Steven";
// const friend3 = "Peter";

// const friends = ["Michael", "Steven", "Peter"];
// console.log(friends);

// const years = new Array(1999, 2000, 2001, 2002);

// console.log(friends[0]);
// console.log(friends[1]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = "Jay";
// console.log(friends);

// // friends = ["Bob", "Alice"]; <-- can not do

// const firstName = "Amar";
// const amar = [firstName, "Muric", 2037 - 2004, "student", friends];

// console.log(amar);
// console.log(amar.length);

const calcAge = function (birthyear) {
  return 2037 - birthyear;
};
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);
