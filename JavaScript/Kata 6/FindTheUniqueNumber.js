/*
There is an array with some numbers. All numbers are equal except for one. Try to find it!
findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

t’s guaranteed that array contains at least 3 numbers.
The tests contain some very huge arrays, so think about performance.

This is the first kata in series:
Find the unique number (this kata)
Find the unique string
Find The Unique
*/
function findUniq(arr) {
  let array = arr.sort((a, b) => a - b);
  let count1 = 0;
  let count2 = 0;
  array.reduce((a, b) => (a == b ? count1++ : 0));
  array.reduceRight((a, b) => (a == b ? count2++ : 0));
  return count1 < count2 ? arr[0] : arr[arr.length - 1];
}

findUniq([1, 1, 1, 2, 1, 1]);
