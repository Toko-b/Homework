//Task 1

let numsArray = [1,2,3,4,5,6];
let strArray = ['js', 'html', 'css'];

let combinedArray = numsArray.concat(strArray);

combinedArray.copyWithin(4, 0, 3);

combinedArray.fill("filled", 2, 4);
combinedArray.pop();
combinedArray.shift();
combinedArray.unshift(100, 200);

function modifyArray(arr){

    let strArray2 = ['Swimming', 'Boxing', 'football', 'Basketball']

    let combinedArray2 = arr.concat(strArray2);

    combinedArray2.copyWithin(4, 0, 3);

    combinedArray2.fill("filled", 2, 4);
    combinedArray2.pop();
    combinedArray2.shift();
    combinedArray2.unshift(100, 200);

}

//Task 2

let people = [{name: 'Jack', lastName: "Grimes"}, {name: "Maria", lastName: "Fox"}];

let places = [{country: "China", place: "Great wall of china"}, {country: "France", place: "Eiffel tower"}];

let mergedArray = people.concat(places);

mergedArray.copyWithin(2, 0, 2);
mergedArray.fill({city: 'New York'}, 1, 4);
mergedArray.pop();
mergedArray.shift();
mergedArray.unshift({name: 'Charlie'}, {name: 'David'});

//Task 3

let mixedArray = ['Hello', 64, 1.75, {name: "Tom"}, ["Football"], 5];
let arrBool = [true, false]

let extendedArray = mixedArray.concat(arrBool)

extendedArray.copyWithin(0, 3, 5);
extendedArray.fill(0, 5, 8)
extendedArray.pop();
extendedArray.shift()
extendedArray.unshift(null, undefined)

// Task 4

let arr1 = [1,4,7,2,4];
let arr2 = ['Good', "job", 'Hello'];
let arr3 = [true, false, 5.43, 'get out'];

let mergedArray2 = arr1.concat(arr2);
mergedArray2.copyWithin(5, 0, 3);
mergedArray2.fill(0, 6);
mergedArray2.pop();
mergedArray2.shift();
mergedArray2.unshift(100, 200);
mergedArray2.splice(1, 3, arr3)
let slicedArray = mergedArray2.slice(1, 6);
slicedArray.join(',');

function comprehensiveArrayTask(Array1, Array2, Array3){
    let mergedArray3 = arr1.concat(arr2);
    mergedArray3.copyWithin(5, 0, 3);
    mergedArray3.fill(0, 6);
    mergedArray3.pop();
    mergedArray3.shift();
    mergedArray3.unshift(100, 200);
    mergedArray3.splice(1, 3, arr3)
    let slicedArray = mergedArray3.slice(1, 6);
    return slicedArray.join(' ,');
}

//task 5

let students = [];
let grade = [];

function addStudent(studenName, studentGrade){
    students.unshift(studenName);
    grade.unshift(studentGrade);

    return students, grade;
}

function removeLastStudent(){
    students.pop();
    grade.pop();

    return students, grade;
}

function replaceGrade(){
    for(let i = 0; i < grade.length; i++){
        grade.splice(grade[i], 1, grade[i])
    }
}

function updateGrades(){
    grade.fill(10, 0, -1);
    return grade;
}

// task 6

let playlist = [];

function addSong(title){
    playlist.unshift(title);

    return playlist;
}

function removeLastSong(){
    playlist.pop();

    return playlist;
}

function moveSongs(){
    playlist.copyWithin(-1, 0, 2);

    return playlist;
}

function combinePlaylists(playlist2){
    let combinedList = playlist.concat(playlist2);

    return combinedList;
}

// task 7

let cartItems = [];
let prices = [];

function addItem(item, price){
    cartItems.unshift(item);
    prices.unshift(price);

    return cartItems, prices;
}

function removeFirstItem(){
    cartItems.shift();
    prices.shift();

    return cartItems, prices;
}

function replaceItem(){
    for(let i = 0; i <= prices.length; i++){
        prices.splice(prices[i], 1, prices[i]);
    }
    for(let i = 0; i <= cartItems.length; i++){
        cartItems.splice(cartItems[i], 1, cartItems[i]);
    }

    return cartItems, prices;
}

function createReceipt(){
    return cartItems.join(', ');
}

function applyDiscount(newPrice){
    prices.fill(newPrice);

    return prices
}

// task 8

let library = [];

function addBook(bookObject){
    library.push(bookObject);
    return library
}

function removeLastBook(){
    library.pop();
    return library;
}

function updateBookCopies(title, number){
    library.splice(number, 1, title);
    return library;
}

function listBooks(){
    return library.join(', ');
}

function extractBooks(){
    let slicedBooks = library.slice(0, 3);
    return slicedBooks;
}

function modifyBooks(){
    library.copyWithin(-1, 0, 1);
    return library
}

function resetCopies(){
    for(let i = 0; i <= library.length; i++){
        library.fill(library[i], 0, -1);
    }
}

function removeFirstBook(){
    library.shift();
    
    return library;
}

function addFirstBook(bookObject){
    library.unshift(bookObject);

    return library;
}