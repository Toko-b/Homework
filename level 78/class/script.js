let imgs = ['program.jpg', 'graphic.jpg', 'mexanic.jpg'];
let num = 0;

function toGraphic(){
    let img = document.getElementById('img');
    num = 1;
    img.src = imgs[num];
} 

function prev(){
    let img = document.getElementById('img');
    num--
    if(num < 0){
        num = imgs.length - 1;
    }
    img.src = imgs[num];
}

function next(){
    let img = document.getElementById('img');
    num++
    if(num >= 3){
        num = 0;
    }
    img.src = imgs[num];
}