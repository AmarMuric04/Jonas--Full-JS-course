//Calculating who wins between Dolphins and Koalas
const calcAverage = (first, second, third) => {
  let average = (first + second + third) / 3;
  return average;
};

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

function checkWinner(avgDolphins, avgKoalas) {
  if (avgKoalas > avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else if (avgDolphins > avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else {
    console.log(`No team wins...`);
  }
}
checkWinner(scoreDolphins, scoreKoalas);
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);

checkWinner(scoreDolphins, scoreKoalas);

/* Write your code below. Good luck! 🙂 */

//Calculating Tip
let tip = 0;
function calcTip(a) {
  if (a >= 50 && a <= 300) {
    tip = a * 0.15;
    return tip;
  } else {
    tip = a * 0.2;
    return tip;
  }
}
const bills = [125, 555, 44];
const tips = [calcTip(125), calcTip(555), calcTip(44)];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills);
console.log(tips);
console.log(totals);

/* Write your code below. Good luck! 🙂 */

// CHALLENGE #3
// Let's go back to Mark and John comparing their BMIs!

// This time, let's use objects to implement the calculations! Remember: BMI = mass / (height * height) (mass in kg and height in meters).

// Your tasks:

// For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith). Name these objects as mark and john, and their properties exactly as fullName, mass and height.

// Create a calcBMI method on each object to calculate the BMI (the same method on both objects). Assign the BMI value to a property, and also return it from the method.

// Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!".

// TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.

const mark = {
  fullName: "Mark Miller",
  height: 1.69,
  mass: 78,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  height: 1.95,
  mass: 92,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

john.calcBMI();
mark.calcBMI();

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})!`
  );
} else if (john.bmi > mark.bmi) {
  console.log(
    `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})! `
  );
}

// console.log(mark.bmi, john.bmi);
// console.log(
//   john.bmi > mark.bmi
//     ? `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})!`
//     : `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})! `
// );
