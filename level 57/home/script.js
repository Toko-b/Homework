let name = prompt("Please enter a name: ");

console.log(`Hello ${name} How have you been lately?`);

let num1 = Number(prompt("please enter a number: "));
let num2 = Number(prompt("please enter a number: "));
let num3 = Number(prompt("please enter a number: "));
let num4 = Number(prompt("please enter a number: "));
let num5 = Number(prompt("please enter a number: "));

let operator = prompt("what do you want to do?");


if(operator === "plus"){
    console.log(num1 + num2, num2 + num3, num3 + num4, num4 + num5);
}
else if(operator === "minus"){
    console.log(num2 - num3, num1 - num2, num3 - num4, num5 - num2);
}
else if(operator === "multiply"){
    console.log(num2 * num3, num4 * num1, num3 * num4, num5 * num3);
}
else if(operator === "devide"){
    console.log(num2 / num3, num2 / num1, num5 / num4, num3 / num1);
}
else if(operator === "square"){
    console.log(num3 ** num1, num2 ** num1, num4 ** num2, num5 ** num1);
}
else if(operator === "module"){
    console.log(num3 % num1, num2 % num1, num4 % num2, num5 % num1);
}

let user1 = prompt("start conversation with user 2: ")
let user2 = prompt("continue conversation with user 1: ")

console.log(user1, user2)

let x = 2;
let y = 4;
let v = 7;
let h = 4;
let b = 5;

x++
y++
v++
h++
b++
x++
y++
v++
h++
b++

x--
y--
v--
h--
b--

console.log(x++,y++,v++,b++,h++)
console.log(++x,++y,++v,++b,++h)