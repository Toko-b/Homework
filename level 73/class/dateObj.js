// task 1

function dayOfWeek(userDate){
    let date1 = new Date(userDate);

    let weekDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let dateIndex = date1.getDay();

    let day = weekDay[dateIndex];

    return day
}

console.log(dayOfWeek(prompt('Enter date you want to know what day it was')));

// task 2

function time(){
    let date = new Date();
    let localTime = date.toLocaleTimeString();

    document.getElementById('clock').textContent = localTime;
}

setInterval(time, 1000);

