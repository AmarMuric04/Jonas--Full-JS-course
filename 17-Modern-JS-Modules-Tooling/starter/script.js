//Importing module
// import { addToCart, totalPrice as price, qt } from './shoppingCart.js';
// console.log(`Total quantity: ${qt}, (${price}$)`);
console.log('Importing module');
// addToCart('potato', 5);

import * as ShoppingCart from './shoppingCart.js';

ShoppingCart.addToCart('bread', 5);
console.log(ShoppingCart.totalPrice);
console.log(ShoppingCart.qt);
