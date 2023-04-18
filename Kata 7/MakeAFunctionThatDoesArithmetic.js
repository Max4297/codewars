function arithmetic(value1, value2, operator) {
  return operator === "add"
    ? value1 + value2
    : operator === "subtract"
    ? value1 - value2
    : operator === "divide"
    ? value1 / value2
    : operator === "multiply"
    ? value1 * value2
    : 0;
}

arithmetic(8, 2, "subtract");
