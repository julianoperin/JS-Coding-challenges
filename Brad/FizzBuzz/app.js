//! challenge FizzBuzz

//! Write a program that prints all the number s from 1 to 100. Fors multiples of 3, instead of teh numbe, print "FIzz", for multiples of 5 print "Buzz". For number which are multiples of both 3 and 5, print "FizzBuzz".

function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) console.log(i, "FizzBuzz");
    else if (i % 3 === 0) console.log(i, "Fizz");
    else if (i % 5 === 0) console.log(i, "Buzz");
    else console.log(i);
  }
}

fizzBuzz();
