function area(width, length){
    console.log(width * length);
}

area(Number(prompt("enter number")), Number(prompt("enter number")));

function area2(){
    let width2 = Number(prompt("enter a number"));
    let length2 = Number(prompt("enter a number"));
    return width2 * length2;
}

console.log(area2);