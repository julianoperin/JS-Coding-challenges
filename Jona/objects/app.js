// for (let i = 1; i <= 10; i++) {
//   console.log("Worked " + i);
// }

// const juInfo = [
//   "juliano",
//   "perin",
//   2020 - 1991,
//   "developer",
//   ["alfa", "bravo", "charlie"],
// ];

// const secondArr = [];

// for (let i = 0; i < juInfo.length; i++) {
//   console.log(juInfo[i]);
//   secondArr.push(juInfo[i]);
// }

// console.log(secondArr);

// const years = [1991, 1992, 1989, 1965, "test"];

// const ages = [];

// // If i !==, skip it.
// for (let i = 0; i < juInfo.length; i++) {
//   if (typeof juInfo[i] !== "number") continue;

//   ages.push(2020 - juInfo[i]);
// }

// console.log(ages);
// console.log("============================");

const juInfo = [
  "juliano",
  "perin",
  2020 - 1991,
  "developer",
  ["alfa", "bravo", "charlie"],
];

// Looping through the array
for (let i = 0; i < juInfo.length; i++) {
  console.log(juInfo[i]);
}

// Looping backwards
for (let i = juInfo.length - 1; i >= 0; i--) {
  console.log(juInfo[i]);
}
