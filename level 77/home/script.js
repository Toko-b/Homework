// task 1
let myDiv = document.querySelector("#myDiv");
myDiv.classList.add('highlight');
myDiv.classList.remove('hightlight');

// task 2

let btn = document.querySelector('#toggleButton');
let targetDiv = document.querySelector('#targetDiv')

btn.addEventListener('click', function(){
    targetDiv.classList.toggle('active');
})

// task 3

let p = document.querySelector('#checkParagraph');
p.classList.add('important');
if(p.classList.contains('important')){
    console.log(true);
}else{
    console.log(false);
}

// task 4

let replaceDiv = document.querySelector("#replaceDiv");
replaceDiv.classList.add('red');
replaceDiv.classList.replace('red', 'blue');

// task 5

let itemDiv = document.querySelector('#itemDiv');
itemDiv.classList.add('class1');
itemDiv.classList.add('class2');
itemDiv.classList.add('class3');

console.log(itemDiv.classList.item(1));

// task 6

let ul = document.querySelector('ul');
let li = document.createElement('li');
li.textContent = 'item4';

ul.appendChild(li);

let firstLi = ul.firstElementChild;
ul.removeChild(firstLi);
ul.children[0].textContent = 'unknown';

// task 7

let myParagraph = document.getElementById('myParagraph');
myParagraph.textContent = ' New text content!';

// task 8

let styledDiv = document.getElementById('styledDiv');

styledDiv.style.backgroundColor = 'lightblue';
styledDiv.style.color = 'darkblue';

// task 9

let newLi = document.createElement('li');
newLi.textContent = 'New list item';
let myList = document.getElementById('myList');

myList.appendChild(newLi);

// task 10

let removableList = document.getElementById('removableList');
removableList.children[1].remove();

// task 11

let img = document.getElementById('myImage');

img.src = 'js.png';
img.alt = 'Updated image';

// task 12

let btn1 = document.getElementById('btn1');
let div1 = document.getElementById('div1');

btn1.addEventListener('click', function(){
    div1.style.backgroundColor = 'green';
});

// task 13

let btn2 = document.getElementById('btn2');
let img1 = document.getElementById('img1');

btn2.addEventListener('click', function(){
    img1.src = 'js.png';
})

// task 14

let btn3 = document.getElementById('btn3');
let p1 = document.querySelector('.p1');

btn3.addEventListener('click', function(){
    p1.classList.toggle('dis');
})

// task 15

let span = document.getElementById('span1');
let btn4 = document.getElementById('btn4');

let count = 0;

btn4.addEventListener('click', function(){
    count++;
    span.textContent = count;
})

// task 16

let submit = document.getElementById('submit');
let choice = document.querySelector('input[name="answer"]:checked');
let answer = document.getElementById('answer');
let answer1 = document.getElementById('answer1');
let answer2 = document.getElementById('answer2');
let answer3 = document.getElementById('answer3');
let answer4 = document.getElementById('answer4');

submit.addEventListener('click', function(){
    if (answer1.checked || answer2.checked || answer3.checked || answer4.checked) {
        if (answer2.checked) {
            answer.textContent = "True";
        } else {
            answer.textContent = "False";
        }
    } else {
        answer.textContent = "please chose a answer";
    }
})