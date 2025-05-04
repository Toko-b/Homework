let age = Number(prompt("enter your age: "));
let gender = prompt("enter your gender: ");
let income = Number(prompt("enter your income: "));

if(age >= 18 && gender === "female"){
    if(income > 5000){
        console.log("Your financial security is secured.");
    }else if(3000 < income && income < 5000){
        console.log("Financial position is stable. A better plan is needed.");
    }else if(income < 3000){
        console.log("You need to improve your financial plan");
    }
}else if(age >= 18 && gender === "male"){
    if(income > 6000){
        console.log("You are ready to invest!");
    }else if(income < 6000 && income > 4000){
        console.log("Income is stable");
    }else if(income < 4000){
        console.log("You need to improve your financial plan")
    }
}else if(age < 18){
    console.log("Get an education and then start investing")
};

let Age = Number(prompt("enter your age: "));

if(Age < 19){
    console.log("Take your kindle");
}

let color = prompt("enter your color: ");

if(color === "red"){
    console.log(1);
}else if(color === "green"){
    console.log(2);
}else if(color === "black"){
    console.log(3);
}

let num = Number(prompt("enter  a number"));

if ((num % 2) === 0){
    console.log("number is even");
}else{
    console.log("number is odd")
}

let temp = Number(prompt("enter temperature: "));

if(temp <= 0){
    console.log("weather is cold");
}else if(temp >= 20 && temp <= 25){
    console.log("weather is moderate");
}else{
    console.log("weather is hot");
}

let grade = Number(prompt("enter your grade: "));

if(grade >= 90 && grade <= 100){
    console.log("A")
}else if(grade >= 80 && grade <= 89){
    console.log("B")
}else if(grade >= 70 && grade <= 79){
    console.log("C")
}else if(grade >= 60 && grade <= 69){
    console.log("D")
}else if(grade <= 59 && grade >= 0){
    console.log("F")
}