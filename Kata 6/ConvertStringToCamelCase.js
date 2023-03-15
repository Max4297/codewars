/*
DESCRIPTION:
Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"

"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

"The_Stealth-Warrior" gets converted to "TheStealthWarrior"
*/
function toCamelCase(str) {
  const reg = /-|_/;
  const splitted = str.split(reg);

  for (let i = 1; i < splitted.length; i++) {
    // const element = array[i];
    const word = splitted[i].split("");
    const first = word[0].toUpperCase();
    word.splice(0, 1);
    const result = [first, ...word].join("");
    splitted[i] = result;
  }

  const result = splitted.join("");
  return result;
}
