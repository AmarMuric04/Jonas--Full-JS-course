//Exporting module
console.log('Exporting module');

//BLOCKING CODE
console.log('Start fetching users');
await fetch('https://jsonplaceholder.typicode.com/users');
console.log('Finished fetching');

const shippingCost = 10;
export const cart = [];

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product}(e/s) added to cart.`);
};

// export { addToCart };

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity as qt };

export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product}(e/s) added to cart.`);
}
