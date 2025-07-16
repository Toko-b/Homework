// // task 1

let score = 0;

function increaseScore(){
    score+= 10;
}

increaseScore();
increaseScore();

console.log(score);

// // task 2

function secretCode(){
    let code = '1234';
}

console.log(code);

// // task 3

let name = 'World';

function greet(){
    let name = "Alice";
    console.log(name);
}
greet();
console.log(name);

// task 4

function counterGame(){
    let counter = 0;
    counter += 1;
    console.log(counter)
}

counterGame();

// task 5

function noName(){
    iHaveNoVariable = 'this';
}

console.log(iHaveNoVariable);

// task 6

// გლობალური ცვლადი არის ისეთი ცვლადი რომელიც არ არის მოქცეული რაიმე კოდის ბლოკში და რისი გამოყენებაც შეგვიძლია ყველგან დამატებითი კოდის წერის გარეშე

// task 7

//  ხოლო ლოკალური ცვლადი არის ცვლადი რომელიც მოქცეულია რაიმე კოდის ბლოკში და  ამ კოდის ბლოკის გარეთ გამოყენება არ შეგვიძლია

// task 8-10 in another file

// task 11

let add = (a, b) => a+b;

console.log(add(15, 25))

// task 12

let double = num => num*2;

console.log(double(15));

// task 13

let firstChar = string => string[0];

console.log(firstChar('Giorgi'));

// task 14

let shout = String => {
    String.style.textTransform = 'uppercase';
    return String;
}

console.log(shout('university'));

// task 15

let isPrime = number => {
    if(number <= 1 ){
        return false
    }else{
        for(let i = 2; i < number; i++){
            if(i % 2 ==0){
                return false
            }else{
                return true
            }
        }
    }
}

// task 16

let checkNumber = num => {
    if(num > 0) return 'positive';
    else if(num < 0) return 'negative';
    else return 'Zero';
}

console.log(checkNumber(0));

// task 17

let fizzBuzz = num => {
    if(num % 3 === 0 && num % 5 === 0) return 'FizzBuzz';
    else if(num % 3 === 0 && num%5 != 0) return "Fizz";
    else if(num%3 != 0 && num%5 === 0) return "Buzz";
    else return num
}

console.log(fizzBuzz(4));