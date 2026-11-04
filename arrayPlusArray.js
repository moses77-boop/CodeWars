function arrayPlusArray(arr1, arr2) {
  let totalArr1 = 0;
  let totalArr2 = 0;

  for (const item of arr1) {
    totalArr1 += item;
  }
  for (const item of arr2) {
    totalArr2 += item;
  }

  return totalArr1 + totalArr2;
}

console.log(arrayPlusArray([1, 2], [4, 5]));
