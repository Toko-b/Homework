// let day = Number(prompt("enter a number 1 - 7: "));

// switch (day){
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
//     default:
//         console.log("Incorrect day");
// }

// let num = Number(prompt("enter a number: "));
// let evenOrOdd = ((num % 2) === 0) ? "even" : "Odd"; 

// console.log(evenOrOdd);

// let weather = Number(prompt("enter a number 1 - 4: "));

// switch (weather){
//     case 1:
//         console.log("Today is Sunny");
//         break;
//     case 2:
//         console.log("Today is rainy");
//         break;
//     case 3:
//         console.log("Today is cloudy");
//         break;
//     case 4:
//         console.log("Today is windy");
//         break;
//     default:
//         console.log("weather is undefined");
// }

let month = Number(prompt("enter a number 1 - 12: "));

switch (month){
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("Octomber");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
    default:
        console.log("There are only 12 months");
}

let half = (month <= 6) ? "this month is first half of the year":
            (month > 6 && month <= 12) ? "this month is second half of the year": "we dont know wich half this is";

console.log(half)