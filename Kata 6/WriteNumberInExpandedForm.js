/*
DESCRIPTION:
Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0.

If you liked this kata, check out part 2!!
*/
function expandedForm(num) {
  let array = String(num).split("");
  let array2 = [];
  let length = array.length;
  let x;
  for (let i = 0; i < length; i++) {
    x = array.shift();
    if (x == "0") {
      continue;
    }
    for (let j = 0; j < array.length; j++) {
      x += "0";
    }
    array2.push(x);
  }
  return array2.join("+");
}
