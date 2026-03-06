const firstArray = [1, 2, 3, 4, 5];
const secondArray = [6, 7, 8, 9, 10];

const combinedArray = [...firstArray, ...secondArray];
const concatedArray = firstArray.concat(secondArray);

console.log(combinedArray);
console.log(concatedArray);