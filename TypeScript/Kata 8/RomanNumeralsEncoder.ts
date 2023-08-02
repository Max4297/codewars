/*
DESCRIPTION:
Create a function taking a positive integer between 1 and 3999 (both included) as its parameter and returning a string containing the Roman Numeral representation of that integer.

Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

Example:

solution(1000); // should return 'M'
Help:

Symbol    Value
I          1
V          5
X          10
L          50
C          100
D          500
M          1,000
Remember that there can't be more than 3 identical symbols in a row.
*/

export function solution(number: number): string {
  let objRomanNumber = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M",
  };

  let arrayNumbers: number[] = [
    1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1,
  ];
  let nominalArray: number[] = [];
  let newArray: number[] = arrayNumbers.map((elem) => {
    let nominalElem: number = Math.floor(number / elem) * elem;
    if (nominalElem > 0) {
      nominalArray.push(elem);
      number -= nominalElem;
    }
    return nominalElem;
  });

  newArray = newArray.filter((elem) => Boolean(elem) == true);

  let res: string = "";

  for (let i: number = 0; i < newArray.length; i++) {
    let elem: number = newArray[i] / nominalArray[i];
    for (let j: number = 0; j < elem; j++) {
      res += objRomanNumber[nominalArray[i] as keyof typeof objRomanNumber];
    }
  }
  return res;
}
