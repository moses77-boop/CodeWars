// A function which takes two arguments and returns all numbers which are divisible by the given divisor.
function divisible(numbers, divisor){
    const result = [];

    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] % divisor === 0){
            result.push(numbers[i]);
        }
    }
    return result;
}
console.log(divisible([1,2,3,4,5,6], 2))