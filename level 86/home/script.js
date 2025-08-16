let name = "Tornike";
let lastName = "Buskivadze";
let hobby = "proggraming";

let object1 = {
    name: name,
    lastName: lastName,
    hobby: hobby
}

let stud = "Student";
let grade = "Grade";
let clas = "favoriteClass";

let studentObj = {
    [stud]: "Levani",
    [grade]: 100,
    [clas]: "Math"
}

let brand = "Porshe";
let model = "918 Spyder";
let color = "silver";
let speed = "345 km/h"

let car = {
    brand: brand,
    model: model,
    color: color,
    topSpeed(){
        return `${this.brand} ${this.model} top speed: ${this.speed} `
    }
}

let motherBoard = "ASUS PRIME H610M-R D4 LGA1700";
let gpu = "rtx 40600";
let hardDrive = "Kingston A400 960GB Sata 3";

let computer = {
    motherBoard: motherBoard,
    gpu: gpu,
    hardDrive: hardDrive
}

let brand2 = "iphone";
let model2 = "XVI pro";
let color2 = "red";

let phone = {
    brand: brand2,
    model: model2,
    color: color2,
    yourPhone(){
        return `you are using ${this.brand}, your model is ${this.model} and your phones color is ${this.color}`
    }
}