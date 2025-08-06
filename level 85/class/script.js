let mixedData = [72, "Tiger", 6, "Lion", 84, "peach"];

let firstString = mixedData.find(str => typeof str === "string");

console.log(firstString);

let fruits = ["mango", "orange"];

let isFruitsArray = Array.isArray(fruits);

console.log(isFruitsArray);

let filteredData = mixedData.filter((val) => typeof val !== "number");
let stringLengths = Array.from(filteredData);
console.log(stringLengths);

let reversedData = mixedData.reverse();
console.log(reversedData);
let MixedNums = mixedData.filter((val) => typeof val === "number");
let sortedNums = MixedNums.sort();

console.log(sortedNums);
