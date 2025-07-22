// task 1

let human = {
    name: "Tornike",
    age: '13',
    city: 'Rustavi'
}

for(let i in human){
    console.log(i);
    console.log(human[i]);
}

// task 2

let productPrice = {
    apple: 5,
    egg: 10,
    bread: 1.99,
    cupcake: 4.45,
    orangeJuice: 4.59,
    fijiWater: 3.99
}

let sum = 0;

for(let i in productPrice){
    sum+=productPrice[i];
}

// task 3

let obj = {
    str1: 'This is first string',
    str2: 'This is second string',
    str3: 'This is third string',
    int1: 2543,
    int2: 1242,
    int3: 7564,
    float1: 7.65,
    float2: 34.09,
    float3: 2.46,
    bool1: true,
    bool2: false
}

for(let i in obj){
    if(typeof(obj[i]) == 'number'){
        console.log(obj[i]);
    }
}

// task 4

let books = {
    "Lord Of The Rings": "J. R. R. Tolkien",
    "Harry Potter": "J. K. Rowling", 
    "Metro 2033": "Dmitry Glukhovsky"
}

let array = [];

for(let i in books){
    array.push(i);
}

// task 5

let array2 = [75,57,235,646,4356,75];
let sum2 = 0;
for(let i of array2){
    sum2+=i;
}

// task 6

let string = 'iCantWriteMuch';
for(let i of string){
    console.log(i);
}

// task 7

let strArr = ['String',"THIS IS COOL","Progg","HTML","REACT"];
for(let i of strArr){
    if(i.length > 5){
        console.log(i);
    }
}

// task 8

let numArr = [5,76,2,75,24,87,54];
let sqrArr = [];

for(let i of numArr){
    sqrArr.push(i**2);
}