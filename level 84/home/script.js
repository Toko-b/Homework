let users = [
    {name: 'Gio', email: "Gio@gmail.com"},
    {name: "Zura", email: "Zura@yahoo.com"},
    {name: "Martha", email: "martha@gmail.com"}
];

let formattedEmails = users.map(value => `${value.name}, ${value.email}`);

let nums = [34,25,96,45,120,764];

let evenNums = nums.filter(num => num%2 == 0);
let squaredEvens = evenNums.map(num => num**2);

let products  = [
    {name: "orange Juice", price: 5, quantity: 3},
    {name: "knife pack", price: 20, quantity: 1},
    {name: "grill", price: 500, quantity: 1},
    {name: "skittles", price: 1.55, quantity: 6},
    {name: "waffels", price: 3.70, quantity: 4},
    {name: "watermelon", price: 3, quantity: 5},
    {name: "Jack Daniels", price: 250, quantity: 1}
];

let totalValue = products.reduce((total, item) => total+(item.price*item.quantity), 0);

let words = ["Evening", "This", "Hello", "Foxes", "I", "Love"];

console.log(words.reduceRight((x, y) => x + ' ' + y, ''));

let studentData = [
    {id: 2454, name: "Joseph", grades: {"Math": 100, "Science": 90, "History": 93, "Physic": 95}, attendence: [true, true, true, true,true, false], extracurricular: ['Swimming', "Proggraming", "History Lessons"]},

    {id: 402, name: "Sophia", grades: {"Math": 85, "Science": 76, "History": 87, "Physic": 93}, attendence: [false, true, true, false,true, false], extracurricular: [ "Science Lessons", "Poetry"]},

    {id: 85, name: "Sam", grades: {"Math": 96, "Science": 100, "History": 68, "Physic": 100}, attendence: [true, false, true, true,false, false], extracurricular: ['History Lessons',"Footbal"]},

    {id: 2001, name: "Amy", grades: {"Math": 90, "Science": 93, "History": 86, "Physic": 89}, attendence: [true, true, true, true,true, true], extracurricular: ['History Lessons']}
];

studentData.forEach(val => console.log(`Hello ${val.name}`));

let studentNames = studentData.map(n => n.name);

let studentAverages = studentData.map((vals) => {
    let grades = vals.grades['Math']+vals.grades['Science']+vals.grades['History']+vals.grades['Physic']
    let avg = studentData.reduce((res) => res + grades/4, 0);
    return {name: vals.name, average: avg};
});

let highPerformingStudents = studentAverages.filter(avg => avg.average >= 85);

let strugglingStudents = studentData.filter(() => studentData.some(val => val.grades < 70));

let extracurricularActivities = studentData.reduce((x, y) => x + y.extracurricular.length, 0);

let allHaveGoodAttendance = studentData.every(attendence => attendence.attendence.includes(true) >= 3);

let hasInactiveStudent = studentData.some(activitie => activitie.extracurricular.length < 1);

let perfect = studentData.forEach(student => {
    for(let i in student.grades){
        if(i == 100){
            console.log(`Congratulations, ${student.name}, for achieving a perfect score in ${student.grades.i}!`);
        }
    }
})
