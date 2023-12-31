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
  const request = Mat.foinputLoanAmount.value;
  /*CHECK IF THE USER HAS A DEPOSIT THATS AT LEAST 10% OF THE REQUESTED LOAN */
  const requestRequirement = currentAccount.movements.some(
    deposit => deposit >= request / 10
  );
  /*IF THE USER HAS A DEPOSIT THATS AT LEAST 10% OF THE REQUEST*/
  if (requestRequirement) {
    currentAccount.movements.push(request);
    inputLoanAmount.value = '';
    inputLoginPin.blur();
    setTimeout(() => {
      updateUI();
    }, /*1000 DOLLARS IS EQUAL TO 1 SECOND OF WAITING TIME*/ 1000 * (request / 1000));
  } /*IF HE DOESNT*/ else console.log('Error');
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

//some and every method
// console.log(movements);
// //equality
// console.log(movements.includes(-130));
// //condition some

// console.log(movements.some((mov, i, arr) => mov === -130));

// console.log(movements.some((mov, i, arr) => mov > 1500));

//every method
// console.log(account4.movements.every((mov, i, arr) => mov > 0));

// const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
// console.log(arr.flat());

// const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
// console.log(arrDeep.flat(2));

// //flat
// const accountMovements = accounts.map(acc => acc.movements).flat();
// console.log(accountMovements);

// //flatMap
// const accountMovements2 = accounts.flatMap(mov => accounts.movements);

// const overallBalance = accountMovements.reduce((acc, mov) => acc + mov, 0);
// const overallDeposit = accountMovements
//   .filter(mov => mov > 0)
//   .reduce((acc, mov) => acc + mov, 0);
// const overallWithdrawal = accountMovements
//   .filter(mov => mov < 0)
//   .reduce((acc, mov) => acc + Math.abs(mov), 0);

// console.log(overallBalance, overallDeposit, -overallWithdrawal);

// //sorting && sort method

// //strings
// const owners = ['Jonas', 'Zack', 'Adam', 'Martha'];
// console.log(owners.sort());

// //numbers
// // console.log(movements.sort().reverse());
// //return <0; a before b( keep order )
// //return >0; b before a ( switch order )

// // movements.sort((a, b) => {
// //   if (a > b) return 1;
// //   if (b > a) return -1;
// // });
// movements.sort((a, b) => a - b);
// console.log(movements);

// const arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(new Array(1, 2, 3, 4, 5, 6, 7));

// //Empty arrays plus fill method
// const x = new Array(7);
// console.log(x);
// x.fill(5, 5, 6);
// console.log(x);

// //full arrays with fill method
// arr.fill(3, 2, 7);
// console.log(arr);

// //Array.from()
// const y = Array.from({ length: 7 }, () => 1);
// console.log(y);

// const z = Array.from({ length: 7 }, (_, i) => i + 1);
// console.log(z);

// //100 random dice rolls
// const rolls = Array.from(
//   { length: 100 },
//   (_, i) => Math.trunc(Math.random() * 6) + 1
// );
// console.log(rolls.sort((a, b) => a - b));
// console.log(rolls.indexOf(2), 1);
// console.log(rolls.indexOf(3) - rolls.indexOf(2), 2);
// console.log(rolls.indexOf(4) - rolls.indexOf(3), 3);
// console.log(rolls.indexOf(5) - rolls.indexOf(4), 4);
// console.log(rolls.indexOf(6) - rolls.indexOf(5), 5);
// console.log(rolls.length - rolls.indexOf(6), 6);

// labelBalance.addEventListener('click', function () {
//   const movementsUI = Array.from(
//     document.querySelectorAll('.movements__value'),
//     el => +el.textContent.replace('€', '')
//   );
//   console.log(movementsUI);

//   const movementsUI2 = [...document.querySelectorAll('.movements__value')].map(
//     el => +el.textContent.replace('€', '')
//   );
//   console.log(movementsUI2);
// });
const accountMovements = accounts.flatMap((mov, i) => mov.movements);
// const overallBalance = accountMovements.reduce((acc, mov) => acc + mov, 0);
// const overallDeposit = accountMovements
//   .filter(mov => mov > 0)
//   .reduce((acc, mov) => acc + mov, 0);
// const overallWithdrawal = accountMovements
//   .filter(mov => mov < 0)
//   .reduce((acc, mov) => acc + Math.abs(mov), 0);

// console.log(overallBalance, overallDeposit, -overallWithdrawal);

//2.
const numDeposits1000 = accountMovements.filter(e => e >= 1000).length;

console.log(numDeposits1000);

const numDeposits1000reduce = accountMovements.reduce((acc, curr) => {
  return curr >= 1000 ? ++acc : acc;
}, 0);
console.log(numDeposits1000reduce);

const numDeposits1000reduce2 = accountMovements.reduce((acc, dpst) => {
  dpst >= 1000 ? acc.push(dpst) : acc;
  return acc;
}, []);
console.log(numDeposits1000reduce2);

//prefixed ++ operator
let a = 10;
console.log(a++);
console.log(a);

// 3.

const { deposits, withdrawals } = accountMovements.reduce(
  (sums, curr) => {
    // curr > 0 ? (sums.deposits += curr) : (sums.withdrawals += curr);
    sums[curr > 0 ? 'deposits' : 'withdrawals'] += curr;
    return sums;
  },
  { deposits: 0, withdrawals: 0 }
);
console.log(deposits, withdrawals);

// 4.
// this is a nice title -> This Is a Nice Title

function stringToTitle(string) {
  const capitalize = str => str[0].toUpperCase() + str.slice(1);
  const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];
  // const modify = string
  //   .split(' ')
  //   .map(e => (exceptions.includes(e) ? e : e[0].toUpperCase() + e.slice(1)));
  // console.log(modify.join(' '));
  const lookForExceptions = string.split(' ').reduce((a, b) => {
    exceptions.includes(b)
      ? a.push(b.toLowerCase())
      : // : a.push(b.slice(0, 1).toUpperCase() + b.slice(1).toLowerCase());
        a.push(capitalize(b));

    return a;
  }, []);
  // const transformArrayToString = lookForExceptions.join(' ');
  // const upperCaseFirstLetter =
  //   transformArrayToString.slice(0, 1).toUpperCase() +
  //   transformArrayToString.slice(1);
  //console.log(uppeCaseFirstLetter)
  console.log(capitalize(lookForExceptions.join(' ')));
}

stringToTitle(
  'and i like to go outside and play in an area with my favorite friends or family members, but sometimes a man shows up on one of the stairs that we play on and tells us to leave'
);
