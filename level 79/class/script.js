let country = prompt('Enter Country');
let capital = prompt("Enter Capital Of That Country");

console.log(`Country: ${country}, Capital: ${capital}`);

function sayHello(){
    return "Hello world";
}

console.log(sayHello());

function ageDiferance(age1, age2){
    if(age1 > age2){
        return 'First Person is older Than Second Person';
    } else if(age1 < age2){
        return 'Second Person is older Than First Person';
    }else{
        return 'Both Person is same Age';
    }
}

console.log(ageDiferance(15, 25));

let btn = document.getElementById('btn');
let btn2 = document.getElementById('btn2');

btn.addEventListener('click', function(){
    btn.style.width = '200px';
    btn.style.height = '50px';
    btn.style.backgroundColor = 'orange';
    btn.style.border = 'none';
    btn.style.borderRadius = '15px';
})

btn2.addEventListener('click', function(){
    btn2.style.color = 'crimson';
    btn2.style.width = '100px'
    btn2.style.height = '25px';
    btn2.style.border = 'solid black 5px';
    btn2.style.fontFamily = 'cursive';
})

let arrowFunction = () => {
    return 'This is an arrow Function long way';
}

console.log(arrowFunction());

let arrowFunction2 = hobby  => `My hobby is ${hobby} and this is arrow function short way`;

console.log(arrowFunction2('Proggraming'));