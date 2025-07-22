// task 1

let scores = [68,95,54,85,77,74,63,75,69,80,71,63];
let studentCount = 0;

for(let pass of scores){
    if(pass > 70){
        studentCount++;
    }
}

console.log(studentCount);

// task 2

let car = {
    brand: "Mercedes-Benz",
    model: "CLK GTR",
    color: 'Silver'
}

for(let i in car){
    console.log(i);
    console.log(car[i]);
    console.log(`The car brand is ${car.brand}, The model is ${car.model},The color is ${car.color}`);
}