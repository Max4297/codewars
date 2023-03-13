/*
Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
*/
function solution(string) {
  return /(?=[A-Z])/g[Symbol.split](string).join(" ");
}

solution("camelCasing");
