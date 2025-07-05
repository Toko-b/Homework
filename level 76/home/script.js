// task 1

let p = document.createElement('p');
p.textContent = 'This is a paragraph.';
document.body.appendChild(p);

// task 2

let headingOne = document.createElement('h2');
headingOne.textContent = 'Subheading.';
document.body.appendChild(headingOne);
headingOne.textContent = 'Updated Subheading.';

// task 3

let div = document.createElement('div');
div.textContent = 'This is a div.';
document.body.appendChild(div);
document.body.removeChild(div);

// task 4

let ul = document.createElement('ul');
let li1 = document.createElement('li');
let li2 = document.createElement('li');
let li3 = document.createElement('li');
li1.textContent = 'item 1';
li2.textContent = 'item 2';
li3.textContent = 'item 3';

ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);

document.body.appendChild(ul);

console.log(ul.firstChild, ul.lastChild)

// task 5

let headingTwo = document.createElement('h3');
headingTwo.textContent = "Inserted Heading.";
let parent = document.body;
parent.insertBefore(headingTwo, p);

// task 6

let span = document.createElement('span');
span.textContent = 'This is a span';

let containerDiv = document.getElementById('container');
containerDiv.appendChild(span);
console.log(containerDiv)