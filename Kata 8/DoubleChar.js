/*
Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

Examples (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "
Good Luck!
*/

function doubleChar(str) {
  let array = str.split("");
  let array2 = [];
  array.forEach((element) => {
    array2.push(element);
    array2.push(element);
  });
  return array2.join("");
}
