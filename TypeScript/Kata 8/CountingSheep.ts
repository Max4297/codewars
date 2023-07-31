export function countSheeps(arrayOfSheep: (boolean | undefined | null)[]) : number {
  return arrayOfSheep.reduce((accumulator, currentValue) => accumulator + Number(Boolean(currentValue)),0);
}