let array1 = new Array("Girogi", 12, 1.8, true, {lastName: "kinwu"}, ["proffesion: basketball"]);

console.log(array1[0]);
console.log(array1[1]);
console.log(array1[2]);
console.log(array1[3]);
console.log(array1[4].lastName);
console.log(array1[5]);

array1[0] = "luka";

array1[3] = false;

array1[4] = {age: 12};

console.log(array1);

let array2 = ["Tornike", ["level 69"], {proffesion1: "programmer", proffesion2: "swimmer"}, ["age: 13"]];

array2[3] = ["age: 14"];


console.log(array2[0]);
console.log(array2[1]);
console.log(array2[2].proffesion2);
console.log(array2[3]);

console.log(array2[78])


let allValue = [7, 'computer', 57.56, false, {name: "Tornike", lastName: "Buskivadze", age: 13, country: "Georgia", city: "Rustavi", hobby: {hobby1: "programming", hobby2: "swimming"} }];

console.log(`Hello my name is ${allValue[4].name}, my last name is ${allValue[4].lastName}. i'm ${allValue[4].age} years old, i'm from ${allValue[4].country} and i live in ${allValue[4].city}. my hobbies are ${allValue[4].hobby.hobby1} and ${allValue[4].hobby.hobby2}.`);