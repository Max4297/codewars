/*
DESCRIPTION:
How can you tell an extrovert from an introvert at NSA?
Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl'f fubrf.

I found this joke on USENET, but the punchline is scrambled. Maybe you can decipher it?
According to Wikipedia, ROT13 is frequently used to obfuscate jokes on USENET.

For this task you're only supposed to substitute characters. Not spaces, punctuation, numbers, etc.

Test examples:

"EBG13 rknzcyr." -> "ROT13 example."

"This is my first ROT13 excercise!" -> "Guvf vf zl svefg EBG13 rkprepvfr!"
*/

export function rot13(str: string): string {
  let array: string[] = str.split("");
  let newArray: string = "";

  array.forEach((elem) => {
    let res: number = elem.charCodeAt(0);

    if ((res > 64 && res < 78) || (res > 96 && res < 110)) {
      newArray += String.fromCharCode(res + 13);
    } else if ((res > 77 && res < 91) || (res > 109 && res < 123)) {
      newArray += String.fromCharCode(res - 13);
    } else {
      newArray += String.fromCharCode(res);
    }
  });

  return newArray;
}
