function stringExpansion(s) {
  let count = 1;
  let result = "";
  const digit ="0123456789";
  
  for(const item of s){
    const char = s[item];
    
    if(digit.includes(char)){
      count = Number(char);
    } else {
      for (const item of count){
        result += char;
      }
    }
  }
  return result;
}