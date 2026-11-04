function uniqueSum(values) {
  if (values.length === 0) {
    return null;
  }

  let total = 0;
  const alreadyCounted = [];

  for (let item of values) {
    const currentNumber = item;
    if (alreadyCounted.includes(currentNumber) === false) {
      total += currentNumber;
      alreadyCounted.push(currentNumber);
    }
  }
  return total;
}
console.log(uniqueSum([1, 2, 4, 4, 6, 7, 2]));
