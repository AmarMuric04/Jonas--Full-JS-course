//Importing module
// import { addToCart, totalPrice as price, qt } from './shoppingCart.js';
// console.log(`Total quantity: ${qt}, (${price}$)`);
console.log('Importing module');
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
