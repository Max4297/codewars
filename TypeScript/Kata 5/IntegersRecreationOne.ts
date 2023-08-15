export const listSquared = (m: number, n: number): number[][] => {
  const array: number[][] = []; // Массив для хранения результатов

  // Функция для нахождения суммы квадратов делителей числа num
  function findDividers(num: number): number {
    let sum: number = 0;
    const sqrtNum = Math.sqrt(num);

    // Перебор чисел от 1 до корня num, чтобы найти делители
    for (let i: number = 1; i <= sqrtNum; i++) {
      if (num % i === 0) {
        sum += i * i; // Добавляем квадрат делителя

        // Если i не равно num / i, добавляем второй делитель и его квадрат
        if (i !== num / i) {
          sum += (num / i) * (num / i);
        }
      }
    }
    return sum;
  }

  // Перебор чисел в заданном диапазоне m и n
  for (let i = m; i <= n; i++) {
    const sqrtSum = Math.sqrt(findDividers(i));

    // Проверка, является ли корень суммы делителей целым числом
    if (Number.isInteger(sqrtSum)) {
      array.push([i, sqrtSum * sqrtSum]); // Добавляем число и квадрат корня суммы в массив
    }
  }

  return array; // Возвращаем результаты
};
