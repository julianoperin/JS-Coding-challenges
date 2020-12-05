// Arrays

const calcAge = function (year) {
  return 2020 - year;
};

const DOB = [1956, 1991, 1992, 1998];

// console.log(calcAge(DOB[0]));
// Getting the last value of an array
console.log(calcAge(DOB[DOB.length - 1]));

const friends = ["Juliano", "Talita", "Diana"];

friends.push("Marcos"); // End
friends.unshift("Olivia"); // Beginning
// friends.pop(); // Delete End
// friends.shift(); // Delete Beginning
console.log(friends.indexOf("Olivia"));
console.log(friends);

console.log(friends.includes("Juliano"));

console.log("=====================");

// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀
*/
const tips = [];

// Short option
// const calcTip = (bill) =>  bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const calcTip = (bill) => {
  if (bill >= 50 && bill <= 300) {
    let tip = bill * 0.15;
    return tips.push(tip);
  } else {
    let tip = bill * 0.2;
    return tips.push(tip);
  }
};

console.log(calcTip(125));
console.log(calcTip(555));
console.log(calcTip(44));
console.log(tips);

console.log("=====================");
// Objects
const julianoArray = [
  "juliano",
  "perin",
  2020 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];

const julianoInfo = {
  firstName: "Juliano",
  lastName: "Perin",
  age: 2020 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};

console.log(julianoInfo);
console.log(julianoArray);

// Dot Notation
console.log(julianoInfo.lastName); // Perin

// Bracket Notation
const nameKey = "Name";
console.log(julianoInfo["first" + nameKey]); // Juliano
console.log(julianoInfo["last" + nameKey]); // Perin

const question = prompt("What do you want to know about Juliano?");
console.log(julianoInfo[question]);
