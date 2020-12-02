// Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
*/

let Dolphins;
let Koalas;

let averDolphins = Math.floor((96 + 108 + 89) / 8);
let averKoalas = Math.floor((88 + 91 + 163) / 5);

console.log(averDolphins, averKoalas);

if (averDolphins > averKoalas && averDolphins >= 100) {
  console.log(`Dolphins won the game with a score of ${averDolphins}`);
} else if (averKoalas > averDolphins && averKoalas >= 100) {
  console.log(`Koala won the game with a score of ${averKoalas}`);
} else if (
  averKoalas === averDolphins &&
  averDolphins >= 100 &&
  averKoalas >= 100
) {
  console.log("There is a draw!");
} else {
  console.log("Please review the information!");
}

// Coding Challenge #4

/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to calculate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

GOOD LUCK 😀
*/

/*
const bill = 430;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
*/

// const input = prompt();
const input = 500;
console.log(`The price of the bill is: ${input}`);

const bill = parseInt(input);

const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total price was ${
  bill + tip
}
`);

console.log("===============================");

function calcAge1(birthYear) {
  return 2020 - birthYear;
}

const myDOB = calcAge1(1991);
console.log(myDOB);

const calcAge2 = function (birthYear) {
  return 2020 - birthYear;
};

const age2 = calcAge2(1992);
console.log(age2);

// Functions in deep

console.log("===============================");

const calcAge = function (year) {
  return 2020 - year;
};

const yearsUntilRetirement = function (DOB, firstName) {
  const age = calcAge(DOB);
  const retirement = 65 - age;

  if (retirement > 0) {
    return retirement;
  }

  if (retirement < 0) {
    return `He/she is already retired!`;
  }
};

console.log(yearsUntilRetirement(1991, "Juliano"));
console.log(yearsUntilRetirement(1940, "Juliano"));

console.log("===============================");

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀
*/

const calcAverage = (a, b, c) => (a + b + c) / 3;

// Test Data
const DolphinsAverage = calcAverage(500, 23, 71);
const KoalasAverage = calcAverage(65, 54, 49);
console.log(DolphinsAverage);
console.log(KoalasAverage);

function checkWinner(DolphinsAverage, KoalasAverage) {
  if (DolphinsAverage >= 2 * KoalasAverage) {
    console.log(`Koalas win (${KoalasAverage} vs ${DolphinsAverage})`);
  } else if (KoalasAverage >= 2 * DolphinsAverage) {
    console.log(`Dolphins win (${DolphinsAverage} vs ${KoalasAverage})`);
  } else if (KoalasAverage === DolphinsAverage) {
    console.log("There is a draw!");
  } else {
    console.log("Nobody won the game!");
  }
}

checkWinner(DolphinsAverage, KoalasAverage);
