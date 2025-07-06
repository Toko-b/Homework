let div = document.getElementById('div1');
let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');

function scaleUp(){
    div.classList.add('scaleUp');
    div.classList.remove('scaleDown');
}

function scaleDown(){
    div.classList.add('scaleDown');
    div.classList.remove('scaleUp');
}

btn1.onclick(scaleUp);
btn2.onclick(scaleDown);

let img = document.querySelector('img')

img.addEventListener('click', function(){
    img.src = 'js.png';
})

