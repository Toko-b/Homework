let array1 = ['Proggraming:', 'Python', 'Html', "Css", "Js"];
let array2 = ['Sports', "Past: Football", "Present: Swimming"];

let concatArray = array1.concat(array2);

concatArray.copyWithin(6, 0, 2);

concatArray.fill(0, 5, 8);

let lastElement = concatArray.pop();

let firstElement = concatArray.shift();

concatArray.unshift(10, 20);

function modifyArray(arr){
    array3 = [1,3,6,4];

    let concatArray2 = arr.concat(array3)

    concatArray2.copyWithin(7, 0, 2);

    concatArray2.fill(0, 5, 8);

    let lastElement = concatArray2.pop();

    let firstElement = concatArray2.shift();

    concatArray2.unshift(10, 20);

    return concatArray2;
}

console.log(modifyArray(['Hello', "World", 'I', "Like", "JS"]));