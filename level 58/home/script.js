let num1 = prompt("Please enter a number: ");
let num2 = prompt("Please enter a number: ");
let num3 = prompt("Please enter a number: ");
let num4 = prompt("Please enter a number: ");
let num5 = prompt("Please enter a number: ");

let Comparison = prompt("Wich Comparison Operator do you want to use (enter with simbol): ");

if(Comparison == ">"){
    console.log(num1>num2,num2>num3,num3>num4,num4>num5);
}
else if(Comparison == "<"){
    console.log(num2<num1,num1<num4,num4<num3,num3<num5);
}
else if(Comparison == ">="){
    console.log(num3>=num2,num1>=num4,num3>=num5,num4>=num2);
}
else if(Comparison == "<="){
    console.log(num1<=num2,num1<=num3,num1<=num2,num5<=num4);
}
else if(Comparison == "=="){
    console.log(num4==num1,num2==num5,num5==num3,num3==num4);
}
else if(Comparison == "!="){
    console.log(num5!=num1,num2!=num4,num2!=num3,num4!=num5);
}
else if(Comparison == "==="){
    console.log(num4===num1,num2===num5,num5===num3,num3===num4);
}

console.log("how are you doing?");
console.log("im doing great what about you");
console.log("me too");
console.log("i hope nothing bad happends");
console.log("Same");

console.log('hey guys how are you?');
console.log('oh we are good what about you?');
console.log('im ok');
console.log('are you gonna watch the game?');
console.log('yes of course');

console.log(`what game?`);
console.log(`what do you mean "what game"`);
console.log(`its world cup final today`);
console.log(`wow i didnt know`);
console.log(`who do you want to win the world cup?`);

let balance = prompt("Your balance:");
let withdrawal = prompt("How much do you want to withdraw? : ");

balance -= withdrawal;
console.log(`after the withdrawal you have $${balance} left in your bank account`);

let country = prompt("Please enter a country: ");
let capital = prompt("Please enter that countries capital: ");

console.log(`Country: ${country}, Capital: ${capital}`);

let name = prompt("Please entert your name: ");

console.log("Welcome " + name);
console.log(`Welcome ${name}`);

let str = prompt("what should string = to?:  ");

console.log(`"${str}"`);