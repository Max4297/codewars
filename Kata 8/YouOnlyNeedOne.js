/*
DESCRIPTION:
You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

Array can contain numbers or strings. X can be either.

Return true if the array contains the value, false if not.
*/
function check(array, x) {
  const q = array.length;
  for (let i = 0; i < q; i++) {
    const element = array[i];
    if (element == x) {
      console.log("Word found");
      const q = i;
      return true;
    } else {
    }
  }
  return false;
}
