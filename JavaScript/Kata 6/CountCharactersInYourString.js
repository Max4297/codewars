/*
The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.
*/
function count(string) {
  let sortString = [...string].sort();
  let count = 1;
  let res = new Object();

  for (let i = 0; i < sortString.length; i++) {
    if (sortString[i] == sortString[i + 1]) {
      count++;
    } else {
      res[sortString[i]] = count;
      count = 1;
    }
  }
  return res;
}

count("ABCCXCSDDSD");
