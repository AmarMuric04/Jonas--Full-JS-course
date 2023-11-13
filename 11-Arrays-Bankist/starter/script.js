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

const account5 = {
  owner: 'Murga',
  movements: [50000, 35000, 20000, 69],
  interestRate: 0,
  pin: 6969,
};

const accounts = [account1, account2, account3, account4, account5];

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

const displayMovements = function (movement) {
  containerMovements.innerHTML = '';
  movement.movements.forEach(function (mov, i) {
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

const calcPrintBalance = function (movements) {
  const balance = movements.movements.reduce((acc, mov) => acc + mov);
  labelBalance.innerHTML = `${balance}€`;
};

const calcSummary = function (movement) {
  /*CALCULATING THE INTEREST*/
  const interest = movement.movements
    .filter(e => e > 0)
    .map((e, i, arr) => (e * movement.interestRate) / 100)
    .filter(e => e >= 1)
    .reduce(
      (acc, e, i, arr) =>
        // console.log(arr);
        acc + e,
      0
    );
  labelSumInterest.textContent = `${interest.toFixed(1)}€`;

  /*CALCULATING HOW MUCH WENT INTO THE ACCOUNT*/
  const totalIn = movement.movements
    .filter(e => e > 0)
    .reduce((acc, e) => acc + e, 0);
  labelSumIn.textContent = `${(totalIn + interest).toFixed(1)}€`;

  /*CALCULATING HOW MUCH WENT OUT THE ACCOUNT*/
  const totalOut = movement.movements
    .filter(e => e < 0)
    .reduce((acc, e) => acc + e, 0);
  labelSumOut.textContent = `${Math.abs(totalOut)}€`;
};

// console.log(account1.interestRate);

// const initials = [];
// function getInitials(user) {
//   // for (const initial of user.split(' ')) {
//   //   initials.push(initial.slice(0, 1));
//   // }
//   // console.log(initials.join('').toLowerCase());
// }
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
// console.log(accounts);

//event handler
let currentAccount;

btnLogin.addEventListener('click', function (event) {
  //prevents page from reloading
  event.preventDefault();
  // console.log('login');

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  /*IF LOGIN INPUTS ARE CORRECT AND MATCHING*/
  if (+inputLoginPin.value === currentAccount?.pin) {
    console.log('Logged in');

    //DISPLAY WELCOME MESSAGE <NAME> + UI

    labelWelcome.textContent = `Welcome back! ${
      currentAccount?.owner.split(' ')[0]
    }`;

    containerApp.style.opacity = '10';

    /*CALCULATING THE BALANCE AND THE MOVEMENT OF THE CURRENT ACCOUNT*/

    //DISPLAY MOVEMENTS
    displayMovements(currentAccount);

    //DISPLAY SUMMARY
    calcSummary(currentAccount);

    //DISPLAY BALANCE
    calcPrintBalance(currentAccount);

    //CLEAR THE INPUT FIELDS
    inputLoginPin.value = inputLoginUsername.value = '';
    inputLoginPin.blur();
  } /*IF THEY ARENT MATCHING*/ else console.log('Error');
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc?.username === inputTransferTo.value
  );
  if (amount > 0 && +labelBalance.textContent > amount) {
    currentAccount.movements.push(Number(-amount));
    receiverAcc.movements.push(Number(amount));

    //DISPLAY MOVEMENTS AFTER TRANSFER
    displayMovements(currentAccount);

    //DISPLAY SUMMARY AFTER TRANSFER
    calcSummary(currentAccount);

    //DISPLAY BALANCE AFTER TRANSFER
    calcPrintBalance(currentAccount);

    console.log(currentAccount.movements);
    console.log(amount, receiverAcc);

    console.log('transferred');
  } else console.log('Error');

  //CLEAR THE INPUT FIELDS
  inputTransferAmount.value = inputTransferTo.value = '';
  inputLoginPin.blur();
});

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

const eurToUSD = 1.1;
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
// console.log('-----------FILTER-----------');
// const deposits = movements.filter(e => e > 0);
// const withdrawals = movements.filter(e => e < 0);

// console.log(deposits);
// console.log(withdrawals);
// console.log('-----------FOREACH-----------');
// const depositsFor = [];
// const withdrawalFor = [];
// for (const depo of movements) {
//   depo > 0 ? depositsFor.push(depo) : withdrawalFor.push(depo);
// }
// console.log(depositsFor);
// console.log(withdrawalFor);

//REDUCE METHOD

// console.log(movements);
// accumulator ==> snowball
// let originalBalance = 40000;
// // const balance = movements.reduce(function (acc, curr, i, arr) {
// //   return acc - curr;
// // });
// const balance = movements.reduce((acc, curr) => acc + curr, originalBalance);
// console.log(balance);
// // console.log(originalBalance + balance);

// let balance2 = 0;
// for (const mov of movements) {
//   balance2 += mov;
// }
// console.log(balance2);

//GET MAXIMUM VALUE OF THE MOVEMENT ARRAY

// const max = movements.reduce(
//   (acc, mov, i) => (acc > mov ? acc : mov),
//   movements[0]
// );

// console.log(max);

//CHAINING MAP REDUCE AND FILTER
// const totalDepositsInUSD = movements
//   .filter(mov => mov > 0)
//   .map(mov => mov * eurToUSD)
//   .reduce((acc, mov) => acc + mov);

// console.log(totalDepositsInUSD);

//THE FIND METHOD
// const firstWithdrawal = movements.find(e => e < 0);

// console.log(movements);
// console.log(firstWithdrawal);

// console.log(accounts);
// console.log('--------USING FIND METHOD----------');
// const account = accounts.find(acc => acc.username === 'jd');
// console.log(account);

// console.log('--------FOROFLOOP----------');
// for (const acc of accounts) {
//   if (acc.username === 'jd') {
//     console.log(acc);
//     break;
//   }
// }
