let firstH = document.getElementById('firstHeading');
let headings = document.getElementsByClassName('headings');
let btn = document.getElementsByTagName('button');

setInterval(function() {firstH.style.color = 'blue', firstH.style.backgroundColor = "black", firstH.style.textAlign = 'center', firstH.style.fontSize = '40px', firstH.style.fontFamily = 'monospace', firstH.textContent = 'I am an great Heading'}, 3000);

setInterval(function() {for(let i = 0; i < headings.length; i++){headings[i].style.color = 'green', headings[i].style.backgroundColor = 'orange', headings[i].style.fontWeight = '900', headings[i].style.textAlign = 'right', headings[i].style.fontFamily = 'cursive', headings[i].textContent = 'This is Heading'}}, 6000);

btn.style.color = 'green';
btn.style.backgroundColor = 'black'; 
btn.style.border = 'none'; 
btn.style.borderRadius = '30px';
btn.style.width = '200px';
btn.style.height = '40px'; 
btn.textContent = 'im inside of an button';