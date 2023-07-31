/*
Your function takes two arguments:

current father's age (years)
current age of his son (years)
Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.
*/

function twiceAsOld(dadYearsOld, sonYearsOld) {
  let count = 0;
  if (dadYearsOld / sonYearsOld > 2) {
    return dadYearsOld - sonYearsOld * 2;
  }

  if (dadYearsOld / sonYearsOld < 2) {
    for (let i = 0; dadYearsOld / sonYearsOld !== 2; i++) {
      dadYearsOld += 1;
      count = i;
    }
    return count + 1;
  }
  return 0;
}
twiceAsOld(36, 7);
