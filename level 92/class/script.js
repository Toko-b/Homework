// ! literal

const car ={
    brand: "dodge",
    model: "Challanger SRT",
    color: "Black",
    engine: "V8"
}

// ? constructor;

class Person {
    constructor(name, lastName, age, proffesion){
        this.name = name;
        this.lastName = lastName;
        this.age = age;
        this.proffesion = proffesion
    }
}

let newPerson = new Person("Giori", "Zviadauri", "21", "Fire Fighter");



class Phone {
    constructor(brand, model, color){
        this.brand = brand;
        this.model = model;
        this.color = color
    };

    phoneInfo(){
        return `I am using ${this.brand} model ${this.model} and it is  ${this.color}`
    }
}

let phone1 = new Phone("Samsung", "S22", "Navy");

console.log(phone1.phoneInfo())

class Operative{
    constructor(name, rank){
        this.name = name;
        this.rank = rank;
    }

    getInfo(){
        return `name: ${this.name}, rank: ${this.rank}`
    }

    static compareRanks(op1, op2){
        if(op1 > op2){
            return `operator 1 rank is bigger than operator 2 rank`;
        }else if(op2 > op1){
            return `operator 2 rank is bigger than operator 1 rank`;
        }else{
            return "both have same rank"
        }
    }
}

class EliteOperative extends Operative{
    constructor(name, rank, specialty){
        super(name, rank);
        this.specialty = specialty;
    }

    getInfo(){
        return `name: ${this.name}, rank: ${this.rank}, specialty: ${this.specialty}`
    }
}