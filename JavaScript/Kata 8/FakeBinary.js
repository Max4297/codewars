/*
Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string
*/
function fakeBin(x) {
  let array = x.split("");
  for (let i = 0; i < array.length; i++) {
    Number(array[i]) >= 5 ? (array[i] = "1") : (array[i] = "0");
  }
  return array.join("");
}

fakeBin("45385593107843568");
