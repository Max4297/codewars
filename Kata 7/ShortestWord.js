/*
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/

function findShort(s) {
  let array = s.split(" ");
  let first = array[0].length;

  array.filter((elem) => {
    if (elem.length < first) {
      first = elem.length;
    }
  });

  return first;
}
