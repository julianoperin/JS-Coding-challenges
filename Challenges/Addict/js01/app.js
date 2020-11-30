function firstWord(str) {
  const words = str.split(" ").map((word) => {

    //let firstLetter = word.slice(0, 1);
    //let rest = word.slice(1);
    //firstLetter = firstLetter.toUpperCase();
    //console.log(firstLetter, rest);
    //return `${firstLetter}${rest}`;
    //OR
    
    return word.charAt(0).toUpperCase() + word.slice(1);
  });

  return words.join(" ");
}

console.log(firstWord("I am felling lucky today"));
