let math = Number(prompt("enter your grade in math: "));
let english = Number(prompt("enter your grade in english: "));
let physic = Number(prompt("enter your grade in physic"));

const avarage = (math + english + physic) / 3;

if (avarage > 90 && avarage < 100) {
    console.log("you get A");
}else if(avarage > 70 && avarage < 80) {
    console.log("you get B");
}  else if (avarage > 50 && avarage < 65){
    console.log("you get C");
}else if (avarage > 25 && avarage < 50){
    console.log("you get D");
}else if (avarage < 25){
    console.log("go learn and how did you get this far?");
}

if(avarage > 90){
    if(avarage < 100){
        console.log("you get A");
    }
}else if(avarage > 70){
    if(avarage < 80){
        console.log("you get B");
    }
}else if(avarage > 50){
    if(avarage < 65){
        console.log("you get C");
    }
}else if(avarage < 50){
    if(avarage > 25){
        console.log("you get D");
    }
}else if(avarage < 25){
    console.log("go learn and how did you get this far?");
}