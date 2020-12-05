// // Objects
// const julianoArray = [
//   "juliano",
//   "perin",
//   2020 - 1991,
//   "teacher",
//   ["Michael", "Peter", "Steven"],
// ];

// const julianoInfo = {
//   firstName: "Juliano",
//   lastName: "Perin",
//   age: 2020 - 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
// };

// console.log(julianoInfo);
// console.log(julianoArray);

// // Dot Notation
// console.log(julianoInfo.lastName); // Perin

// // Bracket Notation
// const nameKey = "Name";
// console.log(julianoInfo["first" + nameKey]); // Juliano
// console.log(julianoInfo["last" + nameKey]); // Perin

// // const question = prompt("What do you want to know about Juliano?");
// // console.log(julianoInfo[question]);

// // ADDING NEW INFO TO THE OBJECT
// julianoInfo.location = "Jersey City";
// julianoInfo["email"] = "julianoperins@gmail.com";

// console.log(julianoInfo);

// console.log(
//   `${julianoInfo.firstName} has ${julianoInfo.friends.length} friends, and his best friend is ${julianoInfo.friends[0]}`
// );

const julianoInfo = {
  firstName: "Juliano",
  lastName: "Perin",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriverLicense: true,

  calcAge: function () {
    this.age = 2020 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} years old, he works as a ${
      this.job
    }, and he has ${this.hasDriverLicense ? "a" : "no"} driver license.`;
  },
};

console.log(julianoInfo.getSummary());

const johnInfo = {
  firstName: "John",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.BMI = Math.floor((this.mass / this.height) ** 2);
    return this.BMI;
  },
};
console.log(johnInfo);

console.log(johnInfo.calcBMI());

const markInfo = {
  firstName: "Mark",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.BMI = Math.floor((this.mass / this.height) ** 2);
    return this.BMI;
  },
};
console.log(markInfo);

console.log(markInfo.calcBMI());

function results() {
  if (markInfo.BMI > johnInfo.BMI) {
    console.log(
      `${markInfo.firstName} has a higher BMI than ${johnInfo.firstName}`
    );
  } else if (johnInfo.BMI > markInfo.BMI) {
    console.log(
      `${johnInfo.firstName} has a higher BMI than ${markInfo.firstName}`
    );
  }
}
console.log(results());
