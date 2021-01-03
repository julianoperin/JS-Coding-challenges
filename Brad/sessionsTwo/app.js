//! RevString
function longestWord(str) {
  let arr = str.split(" ");

  const sorted = arr.sort((a, b) => {
    return b.length - a.length;
  });
}
console.log(longestWord("Hi my name is Juliano!"));
