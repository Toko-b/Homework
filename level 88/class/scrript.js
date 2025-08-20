// let x = 500, y = 300;

// [x,y] = [y,x];

// console.log(x, y);

// let lowerCase = ["A", "B", "C", "D"], upperCase = ['a','b','c','d'];

// [lowerCase, upperCase] = [upperCase, lowerCase];

// console.log(lowerCase, upperCase);

// let nestedArr = [1,2,3,4,5, [6,7,8]];

// let [a,b,c,d,e,[f,g,h]] = nestedArr;

// console.log(a , b , c , d , e , f , g , h);

// let nestedArr2 = ["This is normal value in Array",["This is normal value in a nester Array"]];

// let [normal,[nested]] = nestedArr2;

// console.log(normal + ', ' + nested);

let obj = {
    name: "Tornike",
    lastName: "Buskivadze",
    age: 14
}

let {name, lastName, age} = obj;

let obj2 = {
    studentName: "John",
    courseName: "Python Course",
}

let {studentName, courseName} = obj2;

console.log(`name: ${studentName}, course ${courseName}`);

let nestedObj = {
    name2: "Anna",
    home: {
        city: "New York",
        street: "BroadWay"
    }
}

let {name2, home: {city, street}}= nestedObj;

let obj3 = {
    car: "Nissan",
    model: "Gtr",
    color: "yellow"
}

let {car: manqana, model: modeli, color: feri} = obj3;

console.log(manqana, modeli, feri)