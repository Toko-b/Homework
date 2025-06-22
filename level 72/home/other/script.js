// task 1

let year = Number(prompt('Enter year: '));

if(year / 4 === Math.floor((year / 4))){
    console.log('Leap Year');
}
else{
    console.log('normal Year')
}

// task 2

let namesList = ['Gio','Mari','Lika','Luka','Dachi','Ioane','Nika','Soso'];

function randomName(){
    let randomIndex = Math.floor(Math.random() * (namesList.length))
    let name1 = namesList[randomIndex];
    return `${name1} you must pay price of every food.`
}

// task 3

let num = Number(prompt('Enter number: '));
let list = [];
if(num % 3 === 0 && num % 5 === 0){
    list.push('FizzBuzz')
}else if(num % 3 === 0){
    list.push('Fizz');
}else if(num % 5 === 0){
    list.push('Buzz');
}

// task 4

let list2 = [];

function randomTries(N){
    let sum = 0
    for(let i = 0; i <= N; i++){
        list2.push(Math.floor(Math.random() * N))
        sum += list2[i];
    }
    let arr = sum / list2.length;
    return arr
}
