'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  movements.forEach(function (mov, i) {
    let move = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `<div class="movements__row">
          <div class="movements__type movements__type--${move}">${
      i + 1
    } ${move}</div>
          <div class="movements__value">${mov}€</div>
        </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
    // containerMovements.innerHTML += html;
  });
};

displayMovements(account1.movements);

const user = 'Steven Thomas Williams'; //stw
const user2 = 'Sarah Smith';
const user3 = 'Jessica Davis';
const initials = [];
function getInitials(user) {
  // for (const initial of user.split(' ')) {
  //   initials.push(initial.slice(0, 1));
  // }
  // console.log(initials.join('').toLowerCase());
}
// const username = user
//   .toLowerCase()
//   .split(' ')
//   .map(e => e[0])
//   .join('');
// console.log(username);

const createUsernames = function (accs) {
  accounts.forEach(acc => {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(e => e[0])
      .join('');
  });

  // user.username ? user.username : (user.username = username);
  // return username;
};
createUsernames(accounts);
console.log(accounts);
// console.log(account1);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/////////////////////////////////////////////////

// let arr = ['a', 'b', 'c', 'd', 'e'];

// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -1));
// console.log(arr.slice());
// console.log([...arr]);

// //SPLICE
// // console.log(arr.splice(2));
// // arr.splice(-1);
// // arr.splice(-1);
// // arr.splice(-1);
// console.log(arr);

// //REVERSE

// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());
// console.log(arr2);

// //CONCAT

// const letters = arr.concat(arr2);
// console.log(letters);

// //JOIN

// console.log(letters.join(' and then '));
// letters.unshift(5); //ADDS WHATEVER TO THE START OF AN ARRAY
// letters.pop(); //REMOVES THE LAST THING FROM AN ARRAY
// letters.shift();
// letters.shift();
// letters.shift(); // REMOVES THE FIRST THING FORM AN ARRAY
// console.log(letters);

// const arr = [23, 11, 64];

// console.log(arr[0]);
// console.log(arr.at(0));

// //getting the last element
// console.log(arr[arr.length - 1]);
// console.log(arr.slice(-1)[0]);

// console.log(arr.at(-1));

//LOOPING ARRAYS USING FOR EACH
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const [i, move] of movements.entries()) {
//   move > 0
//     ? console.log(`Movement ${i + 1}: deposited ${move}`)
//     : console.log(`Movement ${i + 1}: withdrew ${Math.abs(move)}`);
// }
// console.log('----------------');

// movements.forEach(function (move, i) {
//   move > 0
//     ? console.log(`Movement ${i + 1} deposited ${move}`)
//     : console.log(`Movement ${i + 1} withdrew ${Math.abs(move)}`);
// });

//MAP
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);
// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// //SET
// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
// console.log(currenciesUnique);

// currenciesUnique.forEach(function (value, key, set) {
//   console.log(`${key}: ${value}`);
// });

//DATA TRANSFORMATIONS

//map loops through an array and modifies each element of the array, creating a new array at the end

//filter loops through an array and filters out any element that doesnt pass the requirements that we set

//reduce loops through an array and reduces the original array to a single variable depending on what we want to do with the array, we can add up all the elements etc...

// const eurToUSD = 1.1;
// const EURtoRSD = 117.2;
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // const movementsUSD = movements.map(function (e) {
// //   return (e * eurToUSD).toFixed(0);
// // });
// const movementsUSD = movements.map(e => e * eurToUSD);
// console.log(movementsUSD);
// function transfer(currency) {
//   const newArray = [];
//   return function (array) {
//     array.forEach(e => {
//       newArray.push(e * currency);
//     });
//     console.log(newArray);
//   };
// }
// const EUR = transfer(eurToUSD);
// const RSD = transfer(EURtoRSD);
// EUR(movements);
// RSD(movements);
// const movementsUSDfor = [];
// for (const movementsInUSD of movements) {
//   movementsUSDfor.push(movementsInUSD * eurToUSD);
// }
// console.log(movementsUSDfor);

// const movDesc = movements.map((e, i) => {
//   return `Movement ${i + 1}: ${e > 0 ? `deposited` : `withdrew`} ${Math.abs(
//     e
//   )}`;
// });

// console.log(movDesc.join('\n'));

//FILTER METHOD
console.log('-----------FILTER-----------');
const deposits = movements.filter(e => e > 0);
const withdrawals = movements.filter(e => e < 0);

console.log(deposits);
console.log(withdrawals);
console.log('-----------FOREACH-----------');
const depositsFor = [];
const withdrawalFor = [];
for (const depo of movements) {
  depo > 0 ? depositsFor.push(depo) : withdrawalFor.push(depo);
}
console.log(depositsFor);
console.log(withdrawalFor);
