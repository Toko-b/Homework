// task 1

function time(){
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let date2 = new Date(`${year}-${month}-${day} ${hour}:${minute}:${second}`)
    return date2;
}

console.log(time());

// task 2

function birthday(birthdate){
    let date = new Date();
    let birthDay = new Date(birthdate);
    let age = date.getFullYear() - birthDay.getFullYear();
    let month = date.getMonth() - birthDay.getMonth();
    if(month < 0 || month == 0 && date.getDate() < birthDay.getDate()){
        age--
    }
    document.write(age)
}

birthday(prompt('When were you born YYYY-MMM-DD'));

// task 3

function dayOfWeek(userDate){
    let date1 = new Date(userDate);

    let weekDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let dateIndex = date1.getDay();

    let day = weekDay[dateIndex];

    return day
}

console.log(dayOfWeek(prompt('Enter date you want to know what day it was')));

// task 4
let i = 0

setInterval(function(){console.log(i++);}, 1000);

// task 5

setInterval(function(){let date3 = new Date(); let localTime = date3.toLocaleTimeString(); console.log(localTime)}, 1000);

// task 6

setInterval(function(){console.log(Math.random())},1000);

// task 7

function delay(message){
    alert(message);
}
let delayTime = Number(prompt("enter ms in thousands"));

setTimeout(delay(prompt('Enter Message')), delayTime);

// task 8

setTimeout(function(){console.log("Hello :D")}, 5000);

// task 9

function Hello(){
    console.log("Hello");
}

function how(){
    console.log('How are you?');
}

function im(){
    console.log("i'm good what about you");
}

setTimeout(Hello, 1000);
setTimeout(how,2000);
setTimeout(im,3000);

// task 10

function greeting(){
    let date = new Date();
    let hours = date.getHours();

    if(hours < 12){
        console.log('Good Morning');
    }else if(hours >= 12 && hours <= 18){
        console.log('Good Afternoon');
    }else if(hours > 24){
        console.log('Good Evening');
    }else{
        console.log('unknown');
    }
}

setInterval(greeting, 1000);