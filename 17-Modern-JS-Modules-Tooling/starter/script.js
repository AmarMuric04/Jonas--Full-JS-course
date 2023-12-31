//Importing module
// import { addToCart, totalPrice as price, qt } from './shoppingCart.js';
// console.log(`Total quantity: ${qt}, (${price}$)`);
console.log('Importing module');
import shoppingCart from './shoppingCart.js';
// addToCart('potato', 5);

// import * as ShoppingCart from './shoppingCart.js';

// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);
// console.log(ShoppingCart.qt);

// import add, { addToCart, totalPrice as price, qt } from './shoppingCart.js';
// add('horse', 1);
// console.log(`Total quantity: ${qt}, (${price}$)`);
import add, { cart } from './shoppingCart.js';
add('horse', 1);
add('bread', 10);
add('donkey', 2);
console.log(cart);
/*

// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);
// console.log('End');

const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  console.log(data);
  return { title: data.at(-1).title, text: data.at(-1).body };
};
// const lastPost = getLastPost();
// console.log(lastPost);

//NOT CLEAN BRO
// lastPost.then(data => console.log(data));

const lastPost2 = await getLastPost();
console.log(lastPost2);

const ShoppingCart = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;
  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product}(e/s) added to cart. (Shipping cost is ${
        (quantity / 10) * shippingCost
      }$)`
    );
  };
  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier.`);
  };
  return { addToCart, cart, totalPrice, totalQuantity };
})();

ShoppingCart.addToCart('pizza', 2);
ShoppingCart.addToCart('orange', 7);
/*
//EXPORT 
export.addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(
    `${quantity} ${product}(e/s) added to cart. (Shipping cost is ${
      (quantity / 10) * shippingCost
    }$)`
  );
};
// IMPORT
const {addToCart} = require('./shoppingCart.js')
*/
// import cloneDeep from '../../node_modules/lodash-es/cloneDeep.js';
import cloneDeep from 'lodash-es';

const state = {
  cart: [
    {
      product: 'bread',
      quantity: 5,
    },
    {
      product: 'pizza',
      quantity: 5,
    },
  ],
  user: {
    isLoggedIn: true,
  },
};

const stateClone = Object.assign(state);
console.log(stateClone);

const stateDeepClone = cloneDeep(state);
state.user.isLoggedIn = false;
console.log(stateDeepClone);

if (module.hot) {
  module.hot.accept();
}

class Person {
  #greeting = 'hey';
  constructor(name) {
    this.name = name;
    console.log(`${this.#greeting} ${name}`);
  }
}

const amar = new Person('Amar');

console.log('Amar' ?? null);
console.log(cart.find(el => el.quantity > 1));

Promise.resolve('TEST').then(x => console.log(x));

import 'core-js/stable';
// import 'core-js/stable/array/find';
// import 'core-js/stable/promise';

//polifying async functions
import 'regenerator-runtime/runtime';

console.log('LOLOL');
