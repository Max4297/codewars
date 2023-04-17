/*
The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.
Examples
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                       
*/
function generateHashtag(str) {
  if (str == false) {
    return false;
  }

  let array = capitalize(str).split(" ");

  array.unshift("#");

  let word = array.join("").trim();

  return word.length > 140 ? false : word;
}

function capitalize(str) {
  return str.replace(/(^|\s)\S/g, function (a) {
    return a.toUpperCase();
  });
}
