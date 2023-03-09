function digitize(n) {
  return Array.from(String(n), Number).reverse();
}

digitize(35231);
