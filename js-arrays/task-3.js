const numbersArr = [10, 20, 30, 40, 50];
const reducedArr = numbersArr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(reducedArr);