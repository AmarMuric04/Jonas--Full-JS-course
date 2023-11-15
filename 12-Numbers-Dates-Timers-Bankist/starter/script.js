'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];
const moon = document.querySelector('.moon');

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

const btnChangeTheme = document.querySelector('.change__theme');

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

containerApp.classList.add('hidden');

const displayMovements = function (movement, sort = false) {
  const movs = sort
    ? movement.movements.slice().sort((a, b) => a - b)
    : movement.movements;

  containerMovements.innerHTML = '';

  movs.forEach(function (mov, i) {
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

const calcPrintBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov);
  labelBalance.innerHTML = `${acc.balance}€`;
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
  labelSumIn.textContent = `${(totalIn + interest).toFixed(2)}€`;

  /*CALCULATING HOW MUCH WENT OUT THE ACCOUNT*/
  const totalOut = movement.movements
    .filter(e => e < 0)
    .reduce((acc, e) => acc + e, 0);
  labelSumOut.textContent = `${Math.abs(totalOut).toFixed(2)}€`;
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

/*LOGIN*/
btnLogin.addEventListener('click', function (event) {
  //prevents page from reloading
  event.preventDefault();
  // console.log('login');

  /*SETTING THE CURRENT ACCOUNT TO WHATEVER USERNAME THE USER PROVIDES INSIDE
  USERNAME INPUT*/
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  /*IF LOGIN INPUTS ARE CORRECT AND MATCHING*/
  if (+inputLoginPin.value === currentAccount?.pin) {
    containerApp.classList.remove('hidden');
    console.log('Logged in');

    //DISPLAY WELCOME MESSAGE <NAME> + UI

    labelWelcome.textContent = `Welcome back! ${
      currentAccount?.owner.split(' ')[0]
    }`;

    containerApp.style.opacity = '10';
    containerApp.style.transition = '1s';
    /*DISPLAYING BALANCE, SUMMARY AND MOVEMENTS*/
    updateUI();

    //CLEAR THE INPUT FIELDS
    inputLoginPin.value = inputLoginUsername.value = '';
    inputLoginPin.blur();
  } /*IF THEY ARENT MATCHING*/ else console.log('Error');
});

/*TRANSFERING MONEY */
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc?.username === inputTransferTo.value
  );
  /*CHECKING IF THE AMOUNT THAT WE WANT TO TRANSFER IS BIGGER 
  THAN 1 AND LESS THAN OR EQUAL THAN OUR CURRENT BALANCE */
  if (
    amount > 0 &&
    currentAccount.balance >= amount &&
    receiverAcc !== currentAccount &&
    receiverAcc
  ) {
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    /*DISPLAYING BALANCE, SUMMARY AND MOVEMENTS*/
    updateUI();
  } /*IF THE TRANFER DOESNT MEET THE REQUIREMENTS*/ else console.log('Error');

  //CLEAR THE INPUT FIELDS
  inputTransferAmount.value = inputTransferTo.value = '';
  inputLoginPin.blur();
});

/*REQUEST A LOAN*/
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  /*OR Math.trunc() because we are working exclusively with positive numbers */
  const request = Math.floor(inputLoanAmount.value);
  /*CHECK IF THE USER HAS A DEPOSIT THATS AT LEAST 10% OF THE REQUESTED LOAN */
  const requestRequirement = currentAccount.movements.some(
    deposit => deposit >= request / 10
  );
  /*IF THE USER HAS A DEPOSIT THATS AT LEAST 10% OF THE REQUEST (+)*/
  if (requestRequirement && request > 0) {
    currentAccount.movements.push(request);
    inputLoanAmount.value = '';
    inputLoginPin.blur();
    setTimeout(() => {
      updateUI();
    }, /*1000 DOLLARS IS EQUAL TO 1 SECOND OF WAITING TIME*/ 1000 * (request / 1000));
  } /*IF HE DOESNT (+)*/ else console.log('Error');
});

/*CLOSING ACCOUNT */
btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    console.log('Deleted');

    //FIND INDEX OF CURRENT ACCOUNT
    const index = accounts.findIndex(acc => acc === currentAccount);

    //DELETE THE ACCOUNT
    accounts.splice(index, 1);

    //UPDATE UI
    containerApp.classList.add('hidden');
    containerApp.style.transition = '0s';

    //CLEAR THE INPUT FIELDS
    inputTransferAmount.value = inputTransferTo.value = '';
    inputLoginPin.blur();
  } else console.log('Error');
});
let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();

  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});
/*UPDATING UI */
const updateUI = function () {
  /*DISPLAYING MOVEMENTS */
  displayMovements(currentAccount);

  /*DISPLAYING BALANCE */
  calcPrintBalance(currentAccount);

  /*DISPLAYING SUMMARY */
  calcSummary(currentAccount);
};

/*CHANGING THEMES FROM DARK TO LIGHT */
let stateOfTheme = true;
function changeTheme(state = false) {
  if (state === true) {
    document.body.style.backgroundColor = '#222';
    document.body.style.color = 'white';
    containerMovements.style.backgroundColor = '#222';
    containerMovements.style.scrollbarColor = 'black';
    inputLoginPin.style.backgroundColor = '#222';
    inputLoginUsername.style.backgroundColor = '#222';
    btnSort.style.color = 'white';
    btnChangeTheme.style.backgroundColor = 'white';
    moon.style.backgroundColor = 'white';
    moon.style.color = 'black';
  } else {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
    containerMovements.style.backgroundColor = 'white';
    containerMovements.style.scrollbarColor = 'white';
    inputLoginPin.style.backgroundColor = 'white';
    inputLoginUsername.style.backgroundColor = 'white';
    btnSort.style.color = 'black';
    btnChangeTheme.style.backgroundColor = 'black';
    moon.style.backgroundColor = 'black';
    moon.style.color = 'yellow';
  }
}
btnChangeTheme.addEventListener('click', function () {
  changeTheme(stateOfTheme);
  stateOfTheme = !stateOfTheme;
});
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// console.log(23 === 23.0);

// //base 10 -> 0 to 9
// //binary base -> 0 and 1
// console.log(0.2 + 0.1);

// console.log(0.1 + 0.2 === 0.3);

// //Converting strings to numbers
// console.log(Number('23'));
// console.log(+'23');

// //parsing
// console.log(Number.parseInt('30px', 10));
// console.log(Number.parseInt('e30px', 10));

// console.log(Number.parseFloat('   2.5rem  ', 10));
// console.log(Number.parseInt('  2.5rem  ', 10));

// console.log(parseInt('25vh'));

// //Check if a value is a number (value is not a number)
// console.log(Number.isNaN(+'a3'));
// console.log(Number.isNaN(23 / 0));
// //returns infinity

// //best way to check if a value is a number
// console.log(Number.isFinite(20));
// console.log(Number.isFinite(20 / 0));
// console.log(Number.isFinite('e0'));
// console.log(Number.isFinite(+'20'));

// console.log(Number.isInteger(20));
// console.log(Number.isInteger(20.5));
// console.log(Number.isInteger(20 / 6));
// console.log(Number.isInteger(20 / 5));

// console.log(Math.sqrt(25));
// console.log(25 ** (1 / 2));
// console.log(8 ** (1 / 3));

// const array = [5, 2, 3, 4, 5, 2, 7];
// console.log(Math.max(...array));
// console.log(Math.max(5, 2, '23', 5));
// console.log(Math.max(5, 2, '23px', 5));

// console.log(Math.min(5, 2, '23', 5));
// console.log(Math.PI * Number.parseFloat('10px') ** 2);

// console.log(Math.trunc(Math.random() * 6) + 1);

// const randomizer = (min, max) =>
//   Math.floor(Math.random() * (max - min) + 1) + min;
// //0....1

// console.log(randomizer(10, 20));

// //rounding integers
// console.log(Math.trunc(23.9));
// console.log(Math.round(23.9));

// console.log(Math.ceil(23.3));
// console.log(Math.ceil(23.9));

// console.log(Math.floor(23.3));
// console.log(Math.floor(23.9));
// //THEY ALL DO TYPE COARSION "20" => 20

// //floor and trunc do the same thing when dealing with positive numbers
// console.log(Math.trunc(-23.3)); //-23
// console.log(Math.floor(-23.3)); //-24

// //rounding decimals

// console.log((2.7).toFixed(0));
// console.log((2.7).toFixed(3));
// console.log((2.345).toFixed(2));
// console.log(+(2.345).toFixed(3));

// console.log(5 % 2);
// console.log(5 / 2); // 5 = 2 + 2 + (1)
// console.log(8 % 3);
// console.log(8 / 3); // 8 = 2 + 2 + 2 + (2)

// console.log(4 % 2 === 0);

// document.body.addEventListener('keydown', function (event) {
//   if (event.key === 'Enter') {
//     [...document.querySelectorAll('.movements__row')].forEach(function (
//       row,
//       i
//     ) {
//       i % 2 === 0
//         ? (row.style.backgroundColor = 'orangered') //0,2,4,6,8
//         : (row.style.backgroundColor = 'blue'); //0,1,3,5,7
//     });
//   }
// });

//287,460,000,000
const diameter = 287_460_000_000;

console.log(diameter);

const price = 345_99;
console.log(price);

const transferFee1 = 15_00;
const transferFee2 = 1_500;

const PI = 3.1_415;
console.log(PI);

console.log(Number('230000'));
