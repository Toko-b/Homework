let btn1 = document.createElement('button');
btn1.textContent = 'Click Me!';

document.body.appendChild(btn1);

btn1.style.border = 'none';
btn1.style.borderRadius = '15px';
btn1.style.width = '350px';
btn1.style.height = '40px';
btn1.style.color = 'orange';
btn1.style.cursor = 'pointer';

let parentElement = document.body;

parentElement.removeChild(btn1);

let program = document.getElementById('program');
let graphic = document.getElementById('graphic');
let mechanic = document.getElementById('mechanic');

let img = document.querySelector('img');

program.onclick(img.src = 'program.jpg');
graphic.onclick(img.src = 'graphic.jpg');
mechanic.onclick(img.src = 'mexanic.jpg');

