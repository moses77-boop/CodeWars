function arrayDiff(a, b) {
  let result = [];

  for (const item of a) {
    let currentItem = item;
    let foundInB = false;

    for (const item of b) {
      if (currentItem === item) {
        foundInB = true;
      }
    }
    if (foundInB === false) {
      result.push(currentItem);
    }
  }
  return result;
}
console.log(arrayDiff([1, 2, 2, 3], [2]));
