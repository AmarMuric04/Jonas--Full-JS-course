const maxTemps = [17, 21, 23];
let str = [];
const printForecast = function (arr) {
  for (let i = 0; i < arr.length; ++i) {
    str.push(` ${arr[i]} in ${i + 1} days`);
  }
  console.log(String(str));
};
printForecast(maxTemps);
