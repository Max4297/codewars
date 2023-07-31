/*
DESCRIPTION:
Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example(Input => Output):
*/
function digitize(n) {
  return Array.from(String(n), Number).reverse();
}

digitize(35231);
