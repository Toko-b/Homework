let students = [
    {name: 'Giorgi', grade: 95},
    {name: 'Lizi', grade:89},
    {name: 'Malxazi', grade: 100},
    {name: 'Jora', grade: 60}
]

let allPassing = students.every(passingGrade => passingGrade .grade > 70);
let hasFailing = students.some(grade => grade.grade < 65);

students.forEach(names => console.log(`Student ${names.name}`))

let honorRoll = [];
students.forEach(honors => {
    if(honors.grade > 90){
        honorRoll.push(honors.name);
    }
});


console.log(allPassing);
console.log(hasFailing);
console.log(honorRoll);