/*
DESCRIPTION:
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.
*/

export function humanReadable(userSeconds: number): string {
  let hours: number = Math.trunc(userSeconds / 3600);
  let rest: number = userSeconds - hours * 3600;
  let minutes: number = Math.trunc(rest / 60);
  let seconds: number = rest - minutes * 60;

  function format(elem: number) {
    let res: string = "";
    elem < 10 ? (res = "0" + elem) : (res += String(elem));
    return res;
  }

  return format(hours) + ":" + format(minutes) + ":" + format(seconds);
}
