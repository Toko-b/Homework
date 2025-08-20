const person =  { name: "Alice", age: 30, city: "New York" };

let {name} = person;
let {age} = person;

console.log(name);
console.log(age);

let {name: userName, city: userCity} = person;

console.log(userCity);
console.log(userName);

const student = {
  name: "Bob",
  age: 20,
  grades: {
    math: 90,
    science: 85,
    english: 92,
  },
};

let {grades: {math, english}} =  student;

console.log(math);
console.log(english);

const numbers = [1, 2, 3, 4, 5];

let [num1,num2,num3, num4, num5]= numbers;
console.log(num1);

console.log(num3)