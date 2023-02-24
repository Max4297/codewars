/*
You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

The returned value must be a string, and have "***" between each of its letters.

You should not remove or add elements from/to the array.
*/

let array = [
  "turns",
  "out",
  "random",
  "test",
  "cases",
  "are",
  "easier",
  "than",
  "writing",
  "out",
  "basic",
  "ones",
];

function twoSort(array) {
  array.sort();

  let word = array[0] + "";
  let res = "";

  for (let i = 0; i < word.length - 1; i++) {
    res += word[i] + "***";
  }
  return (res += word[word.length - 1]);
}

twoSort(array);
