function stringExpansion(s) {
  let count = 1;
  let result = "";
  const digits = "0123456789";

  for (const char of s) {
    if (digits.includes(char)) {
      count = Number(char);
    } else {
      result += char.repeat(count);
    }
  }

  return result;
}

console.log(stringExpansion("3ab"));
