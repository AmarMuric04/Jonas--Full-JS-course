'use strict';

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;
//   function printAge() {
//     let output = `${firstName} is ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear > 1981 && birthYear < 1996) {
//       var millenial = true;

//       //creating a new variable under the same name as one of the global
//       //variables, because its in a different scope, there isnt a problem
//       const firstName = 'Steven';

//       //reassignign whatever was in output
//       output = 'New output!';
//       const str = `You are a millenial ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return console.log(a + b);
//       }
//       add(5, 2);
//     } else {
//       var millenial = false;
//       const str = `You are not a millenial ${firstName}`;
//       console.log(str);
//     }
//     console.log(output);

//     console.log(millenial);
//     // console.log(firstName);
//   }
//   // add(5, 2);
//   printAge();
//   return age;
// }

// const firstName = 'Amar';
// calcAge(1991);

//HOISTING with variables
// console.log(me);
// console.log(year);
// console.log(job);

var me = 'Amar';
const year = 2004;
let job = ' student';

console.log(addDecl(1, 2));
// // console.log(addExpr(1, 2));
// console.log(addArrow(1, 2));

function addDecl(a, b) {
  return a + b;
}
const addExpr = function (a, b) {
  return a + b;
};
const addArrow = (a, b) => a + b;

//example

if (!numProducts) deleteShoppingCart();
// let numProducts = 10;
var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);

//VAR IS UNDEFINED BEFORE ITS INITIALIZATION WHICH MEANS THAT ITS A FALSEY VALUE AND IT CAN
//BREAK OR CALL FUNCTIONS THAT WE DONT WANT, ALSO IT CREATES A PROPERTY INSIDE WINDOW
//WHICH CAN ALSO, CREATE PROBLEMS IN THE LONG RUN, DO NOT USE -->VAR<--.
