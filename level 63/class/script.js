let i = 1;
let sum = 0

while(i <= 10000){
    i++;
    sum = i*i;
    if(sum > 10000){
        break;
    }
};

console.log(sum);


for(let i = 1; i <= 200; i++){
    if(i == 105){
        break;
    }
    else if(i % 3 == 0){
        continue;
    }
    else if(i == 31){
        console.log("Hey my birthday is that number");
    }
    else if(i % 2 == 0){
        console.log(`hey i am even : ${i}`);
    }
    else{
        console.log(i);
    }
}

let x = 1;

while(x <= 200){
    x++
    if(x == 105){
        break;
    }
    else if(x % 3 == 0){
        continue;
    }
    else if(x == 31){
        console.log("Hey my birthday is that number");
    }
    else if(x % 2 == 0){
        console.log(`hey i am even : ${x}`);
    }
    else{
        console.log(x);
    }
}