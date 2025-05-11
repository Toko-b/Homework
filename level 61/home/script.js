let sum = 0;

for(let i = 1; i < 11; i++){
    sum += i;
}

console.log(sum);


for(let x = 1; x < 11; x++){
    console.log(x**2);
}

let input = prompt("enter a word");

for(let i = 0; i < input.length; i++){
    console.log(input[i])
}

let a = "Fizz";
let b = "Buzz";

let num = Number(prompt("enter a number: "))

if(num % 3 === 0 && num % 5 === 0){
    console.log(a + b);
}
else if(num % 3 === 0){
    console.log(a);
}
else if(num % 5 === 0){
    console.log(b);
}
else{
    console.log(num);
}