/*DESCRIPTION:
Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"
*/

function bmi(weight, height) {
  const imt = (weight / (height*height));
  let temp;
  if (imt <= 18.5) temp ="Underweight";
  if (imt > 18.5 && imt <= 25.0) temp ="Normal";
  if (imt > 25.0 && imt <= 30.0) temp ="Overweight";
  if (imt > 30) temp ="Obese";
  return temp;
}
