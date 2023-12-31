// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
// const julia = [3, 5, 2, 12, 7];
// const kate = [4, 1, 15, 8, 3];
// const julia2 = [9, 16, 6, 8, 3];
// const kate2 = [10, 5, 6, 1, 4];
// let together = [];
// const text = [];
// const checkDogs = function (array1, array2) {
//   array1.forEach((age, i) => {
//     age >= 3 ? console.log(`${i + 1}: Adult`) : console.log(`${i + 1}: Puppy`);
//   });
//   console.log("----kate----");
//   array2.forEach((age, i) => {
//     age >= 3 ? console.log(`${i + 1}: Adult`) : console.log(`${i + 1}: Puppy`);
//   });
//   console.log(array1.slice(1, -2));
//   console.log(array1);
//   together = array1.slice(1, -2).concat(array2);
//   console.log(together);
//   together.forEach((age, i) => {
//     age >= 3
//       ? text.push(`Dog number ${i + 1} is an adult and is ${age} years old`)
//       : text.push(`Dog number ${i + 1} is still a puppy`);
//   });
//   console.log(text.join("\n"));
// };
// checkDogs(julia2, kate2);

// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
// */
// const calcAverageHumanAge = function (ages) {
//   const humanAge = ages.map((age) => (age <= 2 ? 2 * age : 16 + age * 4));
//   const filtering = humanAge.filter((e) => e >= 18);
//   const averages = filtering.reduce((acc, age) => acc + age);
//   console.log((averages / filtering.length).toFixed(1));
// };
// calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

// // Coding Challenge #3

// /*
// Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

// TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
// TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

// GOOD LUCK 😀
// */
// const calcAverageHumanAge2 = function (ages) {
//   const average = ages
//     .map((age) => (age <= 2 ? 2 * age : 16 + age * 4))
//     .filter((e) => e >= 18)
//     .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
//   console.log(average);
// };
// calcAverageHumanAge2([5, 2, 4, 1, 15, 8, 3]);
// calcAverageHumanAge2([16, 6, 10, 5, 6, 1, 4]);

// Coding Challenge #4

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Formula: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)



TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

GOOD LUCK 😀
*/
const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

//1. GIVING EVERY DOG A RECOMMENDED FOOD PROPORTION
dogs.map((e) => (e.recommendedFood = +(e.weight ** 0.75 * 28).toFixed(0)));

console.log(
  dogs.map((e) => (e.recommendedFood = +(e.weight ** 0.75 * 28).toFixed(0)))
);
//2. FINDING SARAHS DOG AND SEEING IF ITS HEALTHY
const sarahsDog = dogs.find((e) => e.owners.includes("Sarah"));
sarahsDog.curFood <=
  sarahsDog.recommendedFood + sarahsDog.recommendedFood / 10 &&
sarahsDog.curFood >= sarahsDog.recommendedFood - sarahsDog.recommendedFood / 10
  ? console.log(`Sarahs dog is healthy`)
  : console.log(
      `Sarahs dog is unhealthy, current dogs food is ${
        sarahsDog.curFood
      }, it should be between ${
        sarahsDog.recommendedFood + sarahsDog.recommendedFood / 10
      } - ${sarahsDog.recommendedFood - sarahsDog.recommendedFood / 10} `
    );

//3. ARRAY OF OWNERS WHOS DOGS EAT TOO MUCH
const ownersEatTooMuch = dogs.reduce((arr, dog) => {
  dog.curFood > dog.recommendedFood + dog.recommendedFood / 10
    ? arr.push(dog.owners)
    : arr;
  return arr;
}, []);

//3. ARRAY OF OWNERS WHOS DOGS DONT EAT ENOUGH
const ownersEatTooLittle = dogs.reduce((arr, dog) => {
  dog.curFood < dog.recommendedFood - dog.recommendedFood / 10
    ? arr.push(dog.owners)
    : arr;
  return arr;
}, []);

//4. CONSOLE LOGGING A MESSAGE
console.log(`${ownersEatTooMuch.flat().join(" and ")}'s dog eat too much!`);
console.log(
  `${ownersEatTooLittle.flat().join(" and ")}'s dog doesn't eat enough!`
);
//5. CHECKING IF A DOG EATS EXACTLY HOW MUCH IT SHOULD EAT
console.log(dogs.reduce((boolean, e) => e.curFood === e.recommendedFood));

//6. CHECKING IF A DOG EATS AN OK AMOUNT OF FOOD
console.log(
  dogs.some(
    (e) =>
      e.curFood >= e.recommendedFood - e.recommendedFood * 0.1 &&
      e.curFood <= e.recommendedFood + e.recommendedFood * 0.1
  )
);

//7. CREATING AN ARRAY OF THE OWNERS WHOS DOGS EAT OK
console.log(
  dogs.find(
    (e) =>
      e.curFood >= e.recommendedFood - e.recommendedFood * 0.1 &&
      e.curFood <= e.recommendedFood + e.recommendedFood * 0.1
  ).owners
);

//8.
console.log(dogs.sort((a, b) => b.recommendedFood - a.recommendedFood));
