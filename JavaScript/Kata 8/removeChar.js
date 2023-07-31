/*
DESCRIPTION:
It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
*/

function removeChar(str) {
  //  //You got this!
  let str2 = str.replace(/.$/, "");
  str = str2.replace(/./, "");
  console.log(str2);
  return str;
}
