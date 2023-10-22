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

// const calcAge = function (birthyear) {
//   return 2037 - birthyear;
// };
// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);

// console.log(age1, age2, age3);

// const ages = [
//   calcAge(years[0]),
//   calcAge(years[1]),
//   calcAge(years[years.length - 1]),
// ];
// console.log(ages);

// //ARRAY METHODS
// const friends = ["Michael", "Steven", "Peter"];
// //Add elements
// const newLength = friends.push("Jay");
// console.log(friends);
// console.log(newLength);

// //unshift adds things to the first spot in an array
// friends.unshift("John");
// console.log(friends);

// //Remove elements
// friends.pop();
// const popped = friends.pop(); // removes last
// console.log(popped);
// console.log(friends);
// friends.shift(); // first
// console.log(friends);
// // const shifted = friends.shift();
// // console.log(shifted);

// console.log(friends.indexOf("Steven")); // shows index
// console.log(friends.indexOf("Bob"));

// friends.push(23);
// console.log(friends.includes("Steven")); // returns true or false
// console.log(friends.includes("Bob"));
// console.log(friends.includes("23"));
// console.log(friends.includes(23));

// if (friends.includes("Peter")) {
//   console.log("You have a friend called Peter");
// }
// if (friends.includes("Steven")) {
//   console.log("You have a friend called Steven");
// }
// friends.splice(0, 0); // removes specified item in array, and you can specify how many u want to remove after that one
// console.log(friends);

//OBJECTS
// const amarArray = [
//   "Amar",
//   "Muric",
//   2037 - 2004,
//   "student",
//   ["Michael", "Steven", "Peter"],
// ];
// console.log(amarArray);

// //Name of things insdide --> Properties.
// const amar = {
//   firstName: "Amar",
//   lastName: "Muric",
//   age: 2037 - 2004,
//   job: "student",
//   friends: ["Michael", "Steven", "Peter"],
// };
// console.log(amar);
// //OBJECTS DOT VS BRACKET NOTATION

// console.log(amar.lastName);
// console.log(amar["lastName"]);

// const nameKey = "Name";
// console.log(amar["first" + nameKey]);
// console.log(amar["last" + nameKey]);

// // console.log(jonas."last" + nameKey); <-- cant do this.

// // const interestedIn = prompt(
// //   "What do you want to know about Amar? Choose between firstName, lastName, age, job and friends"
// // );
// // console.log(interestedIn);
// // console.log(amar[interestedIn]);

// // if (amar[interestedIn]) {
// //   console.log(amar[interestedIn]);
// // } else {
// //   console.log(
// //     "Wrong request! Choose between firstName, lastName, age, job and friends"
// //   );
// // }

// amar.location = "Serbia";
// amar["github"] = "@AmarMuric04";

// console.log(amar);

// //Challenge
// //Amar has 3 friends and his best friend is called Michael

// console.log(
//   `${amar.firstName} has ${amar.friends.length} friends, and his best friend is called ${amar.friends[0]}`
// );
// //DONE!
// const amar = {
//   firstName: "Amar",
//   lastName: "Muric",
//   birthyear: 2004, // <-- number value
//   job: "student",
//   friends: ["Michael", "Steven", "Peter"], //  <-- aray value
//   hasDriversLicense: false, // <-- boolean value

//   // calcAge: function () {
//   //   return 2036 - this.birthyear; // <-- function value
//   // },

//   // calcAge: function () {
//   //   // console.log(this);
//   //   return 2036 - this.birthyear; // <-- function value
//   // },
//   calcAge: function () {
//     this.age = 2036 - this.birthyear; // <-- function value
//     return this.age;
//   },
//   // function calcAge() {
//   //   return 2036 - this.birthyear; <-- cant do this
//   // },
// };
// // console.log(amar["calcAge"](amar.birthyear)); // <-- bracket notation
// console.log(amar.calcAge()); // <-- dot notation
// //we calculate the age once, and then the computer knows what the age is, so we can
// //call it.
// console.log(amar.age);
// console.log(amar.age);
// console.log(amar.age);

//CHALLENGE
//Amar is a 32 year old student, born in Serbia, has 3 friends, best friend is steven, and he has a/no drivers license.

// console.log();
// const amar = {
//   firstName: "Amar",
//   lastName: "Muric",
//   birthyear: 2004, // <-- number value
//   job: "student",
//   friends: ["Michael", "Steven", "Peter"], //  <-- aray value
//   hasDriversLicense: false,

//   // driversLicense: function () {
//   //   this.hasDriversLicense === true
//   //     ? (this.hasDriversLicense = "a drivers license")
//   //     : (this.hasDriversLicense = "no drivers license");
//   // },
//   calcAge: function () {
//     this.age = 2036 - this.birthyear; // <-- function value
//     return this.age;
//   },
//   getSummary: function () {
//     // this.driversLicense();
//     console.log(
//       `${this.firstName} is a ${this.calcAge()} year old ${
//         this.job
//       }, born in ${(this.location = "Serbia")}, has ${
//         this.friends.length
//       } friends, best friend is ${this.friends[1]} and he has ${
//         this.hasDriversLicense ? "a" : "no"
//       } driver's license!`
//     );
//   },
// };

// amar.getSummary();

// const murga = {
//   firstName: "Murga",
//   lastName: "Muric",
//   birthyear: 2010, // <-- number value
//   job: "professor",
//   friends: ["Michael", "Mark", "Peter"], //  <-- aray value
//   hasDriversLicense: true,

//   driversLicense: function () {
//     this.hasDriversLicense === true
//       ? (this.hasDriversLicense = "a drivers license")
//       : (this.hasDriversLicense = "no drivers license");
//   },
//   calcAge: function () {
//     this.age = 2036 - this.birthyear; // <-- function value
//     return this.age;
//   },
// };
// murga.driversLicense();
// console.log(
//   `${murga.firstName} is a ${murga.calcAge()} year old ${
//     murga.job
//   }, born in ${(murga.location = "Serbia")}, has ${
//     murga.friends.length
//   } friends, best friend is ${murga.friends[1]} and he has ${
//     murga.hasDriversLicense
//   }.`
// );
// // CHALLENGE DONE
