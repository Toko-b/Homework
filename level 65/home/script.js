// let book = {
//     bookName: 'The lord of the rings',
//     bookAuthor: 'John Ronald Reuel Tolkien',
//     bookReleaseDate: '1954',
//     bookGenre: {
//         genre1: 'High fantasy',
//         genre2: 'Adventure'
//     },
//     bookPrice: '$35.00'
// }

// console.log(book.bookName); 
// console.log(book.bookAuthor); 
// console.log(book.bookReleaseDate); 
// console.log(book.bookGenre.genre1); 
// console.log(book.bookGenre.genre2); 
// console.log(book.bookPrice); 

// console.log(book["bookName"]); 
// console.log(book["bookAuthor"]); 
// console.log(book["bookGenre"]["genre1"]); 
// console.log(book["bookGenre"]["genre2"]); 
// console.log(book["bookPrice"]); 

// console.log(`The book name is ${book.bookName}, the books author is ${book.bookAuthor} and the book was released in ${book.bookReleaseDate}. ${book.bookName}'s genre is ${book.bookGenre.genre1} and ${book.bookGenre.genre2}. On amazon book costs ${book.bookPrice}.`);

// console.log(`The book name is ${book["bookName"]}, the books author is ${book["bookAuthor"]} and the book was released in ${book["bookReleaseDate"]}. ${book["bookName"]}'s genre is ${book["bookGenre"]["genre1"]} and ${book["bookGenre"]["genre2"]}. On amazon book costs ${book["bookPrice"]}.`);


let students = {
    studentName: "Giorgi",
    studentAge: 19,
    studentFaculty: "Arts and Sciences",
    studentCourse: "Mathematics",
    averagePoints: "4.3GPA"
}

console.log(students.studentName);
console.log(students.studentAge); 
console.log(students.studentFaculty); 
console.log(students.studentCourse); 
console.log(students.averagePoints); 

console.log(students["studentName"]); 
console.log(students["studentAge"]); 
console.log(students["studentFaculty"]); 
console.log(students["studentCourse"]); 
console.log(students["averagePoints"]); 

//this text is not about me. im just creating a sentence
console.log(`Hello my name is ${students.studentName}, im ${students.studentAge} years old. my faculty is ${students.studentFaculty} and my course is ${students.studentCourse}. My avarege points is ${students.averagePoints}`);
