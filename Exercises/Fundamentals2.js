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
let tip = 0
function calcTip(a) {
    if (a >= 50 && a <= 300) {
        tip = a * 0.15;
        return tip
    } else {
        tip = a * 0.20;
        return tip;
    }
}
const bills = [125,555,44];
const tips = [calcTip(125),calcTip(555),calcTip(44)];
const totals = [bills[0]+tips[0],bills[1]+tips[1],bills[2]+tips[2]];


console.log(bills);
console.log(tips);
console.log(totals);