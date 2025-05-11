let password = "Buski best";
let tries = 3;



while(tries > 0){
    let userInput = prompt("Enter password: ");
    if(userInput === password){
        console.log("accsess granted");
        break;
    }else{
        tries--
        if(tries > 0){
            console.log(`you have ${tries} left`);
        }else{
            console.log("access denied");
        }
    }
}

let N = Number(prompt("Enter a number for factorial"));

let res = 1;

for(let i = 1; i <= N; i++){
    res *= i;
}

console.log(res);

let x = 100;

while(x >= 0){
    console.log(`${x} seconds left`);
    x--
}