// innerText აბრუნებს ყველა ტექსტს რომელიც შეიცავს ელემენტსა და მის ყველა შვილ ელემენტს. 
// let span = document.getElementById('span-1');
// span.innerText = 'This is not a span';
// ხოლო innerHtml აბრუნებს ყველა ტექსტს, მათ შორის html თეგებს, რომელიც შეიცავს ელემენტს.
// document.body.innerHTML = "this is innerHTML";

let firstHeading = document.getElementById('firstHeading');
firstHeading.style.backgroundColor = 'orange'
let secondHeading = document.getElementById('secondHeading');
secondHeading.style.color = 'violet';
let firstParagraph = document.getElementById('p-1');
firstParagraph.style.border = '5px solid red';
let secondParagraph = document.getElementById('p-2');
secondParagraph.style.fontSize = '25px';
let firstBtn = document.getElementById('btn-1');
firstBtn.style.borderRadius = '15px';
let buttons = document.getElementsByClassName("buttons");
let spans = document.getElementsByTagName('span');
let paragraph1= document.getElementById('p-3');
let paragraph2 = document.getElementById('p-4');


paragraph2.innerText = 'This is fourth paragraph'
paragraph1.innerHTML = 'This is third paragraph'

for(let i = 0; i < buttons.length; i++){
    buttons[i].style.border = 'none';
    buttons[i].style.borderRadius = '15px';
    buttons[i].style.width = '200px';
    buttons[i].style.height = '25px';
    buttons[i].style.backgroundColor = 'blue';
    buttons[i].style.color = 'green';
}

for(let i = 0; i < spans.length; i++){
    spans[i].style.color = 'red';
    spans[i].style.fontFamily = 'monospace';
    spans[i].style.backgroundColor = 'black'
};

