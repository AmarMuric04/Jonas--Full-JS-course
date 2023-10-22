// // Remember, we're gonna use strict mode in all scripts now!
"use strict";

// const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// //First i created a list that ignores the errors, makes a new array without them
// let noErrorArray = [];
// for (let i = 0; i < temperatures.length; i++) {
//   if (typeof temperatures[i] === "string") continue;
//   noErrorArray.push(temperatures[i]);
// }
// //Then using that new array i found the biggest number
// function findMaxTemperature(array) {
//   let maxTemp = array[0];
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] > maxTemp) maxTemp = array[i];
//   }
//   return maxTemp;
// }
// // And the lowest number
// function findMinTemperature(array) {
//   let minTemp = array[0];
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] < minTemp) minTemp = array[i];
//   }
//   return minTemp;
// }

// //difference between these 2 is -->

// const difference =
//   findMaxTemperature(noErrorArray) - findMinTemperature(noErrorArray);

// console.log(`difference is ${difference}`);

// //Function now takes in two arrays of temperatures

// const temperatures2 = [5, 2, 10, -5, -2, -40, 5, 2, 3, 4, 10, 15];

// let merged = [];
// const mergeArrays = function (array1, array2) {
//   //   for (let i = 0; i < array2.length; i++) {
//   //     merged.push(array2[i]);
//   //   }
//   //   for (let i = 0; i < array1.length; i++) {
//   //     merged.push(array1[i]);
//   //   }
//   //   console.log(merged);

//   merged = array1.concat(array2);
//   return merged;
// };

// mergeArrays(noErrorArray, temperatures2);

// const calculateAmplitude = function (array) {
//   let minValue = array[0];
//   let maxValue = array[0];
//   for (let i = 0; i < array.length; i++) {
//     const currentTemp = array[i];

//     if (currentTemp > maxValue) maxValue = currentTemp;
//     if (currentTemp < minValue) minValue = currentTemp;
//   }
//   return maxValue - minValue;
// };

// console.log(`amplitude of the merged array is ${calculateAmplitude(merged)}`);

// const measureKelvin = function () {
//   const measurement = {
//     type: "temp",
//     unit: "celsius",
// value: Number(prompt("Degree celsius:")),
//   };
//   const kelvin = measurement.value + 273;
//   return kelvin;
// };
// console.log(measureKelvin());

// const calculateAmplitudeBug = function (t1, t2) {
//   const array = t1.concat(t2);

//   let minValue = 0;
//   let maxValue = 0;
//   for (let i = 0; i < array.length; i++) {
//     const currentTemp = array[i];

//     if (currentTemp > maxValue) maxValue = currentTemp;
//     if (currentTemp < minValue) minValue = currentTemp;
//     debugger;
//   }
//   return maxValue - minValue;
// };
// const AmplitudeBug = calculateAmplitudeBug([3, 6, 2, 2, 2], [2, 3, 2, 5]);
// console.log(AmplitudeBug);
