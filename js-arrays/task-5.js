// spread, concat

const firstArray = [1, 2, 3, 4, 5];
const secondArray = [6, 7, 8, 9, 10];

const spreadArray = [...firstArray, ...secondArray];
const concatArray = firstArray.concat(secondArray);

console.log(spreadArray);
console.log(concatArray);
