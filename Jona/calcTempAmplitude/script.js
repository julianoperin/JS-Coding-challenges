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

const calcAmplitude = arr => {
  let results = [];
  arr.map(item => {
    if (!isNaN(item)) {
      results.push(item);
    }
    results.sort((a, b) => a - b);
  });

  // Find the max number
  const maxNumber = results.reduce((a, b) => {
    return Math.max(a, b);
  });

  // Find the min Number
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
