let basic = {
    pushUp: 15,
    pullUp: 5,
    squat: 30,
    chinUp: 5
}

let advanced = {
    diamondPushUp: 30, 
    muscleUp: 15, 
    weightedSquat: 60, 
    weightedDips: 25
}

let completed = confirm("have you completed basic workout");

if(completed == true){
    let total = Object.assign(basic, advanced);
    console.log(total);
}else{
    console.log("you have to complete basic workout to access advanced workout")
}

