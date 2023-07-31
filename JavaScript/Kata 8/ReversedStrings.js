/*
DESCRIPTION:
Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'
*/
function solution(str) {
  let arr = str.split("").reverse().join("");
  return arr;
}
