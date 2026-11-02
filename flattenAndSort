function flattenAndSort(array) {
  let result = [];

  for (const item of array) {
    for (const content of item) {
      result.push(content);
    }
  }
  return result.sort((a, b) => a - b);
}

console.log(flattenAndSort([[50, 20, 10], [1, 5, 100], [], [2, 4, 30]]));
