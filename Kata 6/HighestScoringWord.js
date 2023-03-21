/*
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

For example, the score of abad is 8 (1 + 2 + 1 + 4).

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.
*/

function high(x) {
  let array = x.split(" ");
  let count = 0;
  let before = 0;
  let word;

  for (let i = 0; i < array.length; i++) {
    let arrayLetters = array[i].split("");

    arrayLetters.forEach((element) => {
      count += element.codePointAt() - 96;
    });

    if (count > before) {
      before = count;
      word = arrayLetters;
    }
    count = 0;
  }
  return word.join("");
}

high("man i need a taxi up to ubud");
