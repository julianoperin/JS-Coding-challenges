//! RevString
function reverseString(str) {
  // return str
  // .split("")
  // .reverse()
  // .join("");
  //----------------
  //Increment
  // revString = "";
  // for (let i = 0; i <= str.length - 1; i++) {
  //   revString = str[i] + revString;
  // }
  // return revString;
  //----------------
  //Decrement
  // revString = "";
  // for (let i = str.length - 1; i >= 0; i--) {
  //   revString = revString + str[i];
  // }
  // return revString;
  //For Off
  // revString = "";
  // for (let char of str) {
  //   revString = char + revString;
  // }
  // return revString;
  //ForEach
  // revString = "";
  // str.split("").forEach((item) => {
  //   revString = item + revString;
  // });
  // return revString;
  // Reduce
  //return str.split("").reduce((revString, char) => {
  //  return char + revString;
  // }, "");
}
// console.log(reverseString("abcd"));

//? PALINDROME
function checkPalindrome(str) {
  // const checkString = str.split("").reverse().join("");
  // str === checkString
  //   ? console.log("It is a palindrome")
  //   : console.log("It is not palindrome");
  // return checkString;
}

// console.log(checkPalindrome("madam"));

//? REVERSE AN INTEGER
function reverseInt(int) {
  // let revInt = int.toString().split("");
  // let result = "";
  // for (let char of revInt) {
  //   result = char + result;
  // }
  // return parseInt(result);
  //! OR
  // let revInt = int.toString().split("").reverse().join("");
  // return parseInt(revInt);
  //! OR
  // return int
  //   .toString()
  //   .split("")
  //   .reduce((revInt, char) => {
  //     return parseInt(char + revInt);
  //   }, "");
}

// console.log(reverseInt(2548));
