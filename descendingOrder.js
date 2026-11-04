function descendingOrder(number) {
  const digits = String(number).split("");
  digits.sort((a, b) => b - a);
  const joinDigits = digits.join("");

  return Number(joinDigits);
}
console.log(descendingOrder(4675123));
