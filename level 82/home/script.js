let primNonPrim = a => {
    const typeOfA = typeof(a);
    if(typeOfA === "boolean" || typeOfA === "bigint" || typeOfA === "string" || typeOfA === "number" || typeOfA === "symbol" || a===null){
        return 'Primative';
    }else{
        return "Non-primative";
    }
}

let allFalsy = arr => {
    for(let i of arr){
        if(i != 0 || i != -0 || i != 0n|| i !=-0n || i != null || i !=undefined || i !=false){
            return false;
        }
        else{
            return true;
        }
    }
}

console.log(allFalsy([0,-0,null,undefined]));

let removeFalsy = x => {
    x.sort()
    for(let i of x){
        if(i ==0 || i == -0 || i ==0n || i == -0n || i == undefined ||  i == null || i == false){
            x.shift();
        }
    }
}

let countTruthiesAndFalsies = arr2 => {
    let countFalsy = 0;
    let countTruthy = 0; 
    for(let i of arr2){
        if(i ==0 || i == -0 || i ==0n || i == -0n || i == undefined ||  i == null || i == false){
            countFalsy++
        }else{
            countTruthy++
        }
    }
    let both = {Falsy:  `${countFalsy}`, Truthy: `${countTruthy}`};
    return both;
}

console.log(countTruthiesAndFalsies([false,'abc',0,true,null,126]));

let a = "hello";
let b = a;
b = "world";

console.log(a); // "hello" because variable a holds "hello"
console.log(b); // "world" because variable b held variable a wich holds "hello" but we changed it and b now holds "world"

let x = { name: "Janeza" };
let y = x;
y.name = "Master";

console.log(x.name); // "Janeza" because object inside of variable x holds name wich holds "janeza". and we call x.name
console.log(y.name); // "master" because we change "Janeza" with "Master";

const arr = ["JS", "React", "Node"];

console.log("Using for...in:");
for (let key in arr) {
  console.log(key);// this will output index of each value because we use for...in for objects and not arrays
}

console.log("Using for...of:");
for (let value of arr) {
  console.log(value);//this will output each value of an array because we use for...of for arrays
}

let obj = {name:'gio', age:15, proffesion: 'proggramer'};

for(let key in obj){
    console.log(key);
}

let array = ["Js", "React", "Node"];
for(let value of arr){
    console.log(value)
}