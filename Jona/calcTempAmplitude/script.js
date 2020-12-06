// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

//? 1) Understanding the problem
// - What is temp amplitude? Answer: //! difference between highest and lowest temp
// - How to compute max and min temperatures? //!
// - What's a sensor error? And what do do? //! the error string on the array

//? 2) Breaking up into sub-problems
// - How to ignore errors? //!for the error, for loop = continue
// - Find max value in temp array //! used Math.Max() or reduce  === 17
// - Find min value in temp array //! //! used Math.Max() or reduce === -6

let test = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// //! ignore the "errors"
// let results = [];
// test.map(item => {
//   if (!isNaN(item)) {
//     result.push(item);
//   }
//   result.sort((a, b) => a - b);
// });
// console.log(result);

// // Finding the highest number in an array = First way
// const maxNumber = result.reduce((a, b) => {
//   return Math.max(a, b);
// });

// console.log(maxNumber);

// // Finding the highest number in an array = Second way

// const maxNumber2 = Math.max(...result);
// console.log(maxNumber2);

// // Finding the highest number in an array = First way
// const minNumber = result.reduce((a, b) => {
//   return Math.min(a, b);
// });

// console.log(minNumber);

// // Finding the highest number in an array = Second way
// const minNumber2 = Math.min(...result);
// console.log(minNumber2);

// //! Calc The Amplitude
// const diff = (a, b) => {
//   return Math.abs(a - b);
// };

// console.log(diff(maxNumber, minNumber));

// My way

const calcAmplitude = arr => {
  let results = [];
  arr.map(item => {
    if (!isNaN(item)) {
      results.push(item);
    }
    results.sort((a, b) => a - b);
  });

  //? Find the max number
  const maxNumber = results.reduce((a, b) => {
    return Math.max(a, b);
  });

  //? Find the min Number
  const minNumber = results.reduce((a, b) => {
    return Math.min(a, b);
  });

  const diff = (a, b) => {
    return Math.abs(a - b);
  };

  const amplitude = diff(maxNumber, minNumber);

  return `The Amplitude is ${amplitude}, the maximum temperature was ${maxNumber} and the minimum temperature was ${minNumber}.`;
};

console.log(calcAmplitude(test));

//! Another way

let temperaturesTwo = [3, -2, -11, -1, 'error', 9, 13, 27, 15, 14, 9, 5];

const calcTemps = testArray => {
  //? find the max number in the array and
  //? find the min number in the array

  let max = testArray[0];
  let min = testArray[0];
  let amp = 0;

  for (let i = 0; i < testArray.length; i++) {
    const curTemp = testArray[i];

    // ? Skip !== numbers
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
    amp = max - min;
  }
  return `The Amplitude is ${amp}, the maximum temperature was ${max} and the minimum temperature was ${min}.`;
};
console.log(calcTemps(temperaturesTwo));

//! Problem 2: Array now should receive two arrays

// temperaturesTwo
// test

// let thirArr = [...temperaturesTwo, ...test];
let thirArr = temperaturesTwo.concat(test);

console.log(thirArr);

console.log(calcTemps(thirArr));

const calcTemperaturesOfTwoArrays = (t1, t2) => {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];
  let amp = 0;

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];

    // ? Skip !== numbers
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
    amp = max - min;
  }
  return `The Amplitude is ${amp}, the maximum temperature was ${max} and the minimum temperature was ${min}.`;
};
console.log(
  calcTemperaturesOfTwoArrays([1, 5, 9, 7, 3, 4], [9, 3, 7, 1, 2, 5])
);
