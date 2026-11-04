function oddOrEven(array) {
  let total = 0;

  for (const item of array) {
    total += item;
  }
  if (total % 2 !== 0) {
    return "odd";
  }
  return "even";
}
console.log(oddOrEven([0]));
