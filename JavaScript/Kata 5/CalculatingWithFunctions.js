/*
DESCRIPTION:
This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Division should be integer division. For example, this should return 2, not 2.666666...:
eight(dividedBy(three()));
*/

function zero(num) {
  return num == undefined ? 0 : operator([...num, 0]);
}
function one(num) {
  return num == undefined ? 1 : operator([...num, 1]);
}
function two(num) {
  return num == undefined ? 2 : operator([...num, 2]);
}
function three(num) {
  return num == undefined ? 3 : operator([...num, 3]);
}
function four(num) {
  return num == undefined ? 4 : operator([...num, 4]);
}
function five(num) {
  return num == undefined ? 5 : operator([...num, 5]);
}
function six(num) {
  return num == undefined ? 6 : operator([...num, 6]);
}
function seven(num) {
  return num == undefined ? 7 : operator([...num, 7]);
}
function eight(num) {
  return num == undefined ? 8 : operator([...num, 8]);
}
function nine(num) {
  return num == undefined ? 9 : operator([...num, 9]);
}
function plus(num) {
  return num.length == 2 ? num[1] + num[0] : [num, "+"];
}
function minus(num) {
  return num.length == 2 ? num[1] - num[0] : [num, "-"];
}
function times(num) {
  return num.length == 2 ? num[1] * num[0] : [num, "*"];
}
function dividedBy(num) {
  return num.length == 2 ? num[1] / num[0] : [num, "/"];
}

function operator(num) {
  switch (num[1]) {
    case "+":
      return Math.trunc(plus([num[0], num[2]]));
    case "-":
      return Math.trunc(minus([num[0], num[2]]));
    case "*":
      return Math.trunc(times([num[0], num[2]]));
    case "/":
      return Math.trunc(dividedBy([num[0], num[2]]));
  }
}
