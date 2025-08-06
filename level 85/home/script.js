let users = [{id: 1,name: "michael"}, {id:2, name: "Miguel"}, {id:3, name: "Martha"}];

let userWithId3 = users.find(id => id.id === 3);

let colors = ["Orange", "Purple", "Blue", "Grey"].reverse();

let productPrices = [62,74,12,4,86,24];

productPrices.sort((a, b )=> b-a);

let string = "Burger";

let characters = Array.from(string);

let data1 = [24,75,25,86,34,54,21,8];
let data2 = "Spaggeti";

let isData1Array = Array.isArray(data1);
let isData2Array = Array.isArray(data2);

let courses = [
    {id: 1, courseName: "The Complete Agentic AI Engineering Course",  capacity: 28, grade: 90, credit: 78}, 
    {id: 2, courseName: "The Web Developer Bootcamp",capacity: 32, grade: 93, credit: 90},
    {id: 3, courseName: "Complete web development course",capacity: 38, grade: 100, credit: 85},
    {id: "MA201", courseName: "Calculus course", capacity: 40, grade: 98, credit: 100}
];

let studentNamesString = Array.isArray(courses);

console.log(studentNamesString);

courses.forEach(e => {
    console.log(e.id, e.courseName);
})

let courseNames = courses.map(name => name.courseName);
console.log(courseNames);

let courseAverages = courses.map(v => {
    let avg = 0;
    courses.forEach(point => avg += point.grade);
    let obj = {name: v.courseName, grade: Math.round(avg/3)};
    return obj
})

let activeCourses = courses.filter(e => e.courseName.isActive)

let calculusCourse = courses.find(e => e.id == "MA201");

console.log(calculusCourse);

courses.forEach(e => {
   let v = courses.every(e => e.grade > 70);
   console.log(v)
})

let cap = courses.some(e => e.capacity  < 30);

console.log(cap);

let coursesByCapacity = Array.from(courses);

coursesByCapacity.sort()

console.log(coursesByCapacity);

let reversed = coursesByCapacity.reverse();

console.log(reversed)

let totalCredit = courses.reduce((e, b) => e + b.credit, 0);

let list = [];

courses.forEach(e => {
    list.push(e.courseName);
})

console.log(list.reduceRight((v,z) => v + "-" + z, ''))