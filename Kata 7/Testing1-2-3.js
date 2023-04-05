/*
Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

Write a function which takes a list of strings and returns each line prepended by the correct number.

The numbering starts at 1. The format is n: string. Notice the colon and space in between.

Examples: (Input --> Output)

[] --> []
["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

*/

// let number = function (array) {
//   let count = 0;
//   if (array == []) {
//     return [];
//   }
//   array.forEach((Element) => {
//     count++;
//     number.push($count + ": " + Element);
//   });

//   console.log(number);
// };

function number(array) {
  let count = 0;
  let number = [];
  if (array == []) {
    return [];
  }
  array.forEach((Element) => {
    count++;
    number.push(`${count} : ${Element}`);
  });

  return number;
}

number(["a", "b", "c"]);
