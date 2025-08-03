let btn1 = document.getElementById("all-todo");
let btn2 = document.getElementById("active-todo");
let btn3 = document.getElementById("completed-todo");
let submitBtn= document.getElementById('submitBtn');
let ul = document.querySelector('ul');
let form = document.querySelector('.todo-form')

ul.style.listStyleType = "none";
ul.style.padding = 0;

btn1.addEventListener('click', function(){
    btn2.classList.remove('filter');
    btn2.classList.add('color')
    btn3.classList.remove('filter');
    btn3.classList.add('color')
    btn1.classList.replace('color', 'filter');
});

btn2.addEventListener('click', function(){
    btn1.classList.remove('filter');
    btn1.classList.add('color');
    btn3.classList.remove('filter');
    btn3.classList.add('color')
    btn2.classList.replace('color', 'filter');
});

btn3.addEventListener('click', function(){
    btn1.classList.remove('filter');
    btn1.classList.add('color');
    btn2.classList.remove('filter');
    btn2.classList.add('color')
    btn3.classList.replace('color', 'filter');
});

submitBtn.addEventListener('click', function(){
    event.preventDefault()
    let i = document.getElementById('input').value;
    if(i.length > 0){
        let newElem = document.createElement('li');
        let checkbox = document.createElement('input');
        let checkLabel = document.createElement('div');
        checkbox.setAttribute("type", "checkbox");
        let label = document.createElement('label');
        let delEditBtns = document.createElement('div')
        let deleteBtn = document.createElement('button');
        let editBtn = document.createElement('button');

        deleteBtn.textContent = 'Delete';
        editBtn.textContent = 'Edit';
        label.textContent = i;

        checkLabel.appendChild(checkbox);
        checkLabel.appendChild(label);
        delEditBtns.appendChild(deleteBtn);
        delEditBtns.appendChild(editBtn);

        newElem.style.height = '28px';
        newElem.style.padding = '8px 0';
        newElem.style.display = 'flex';
        newElem.style.justifyContent = 'space-between';
        newElem.style.alignItems = 'center';
        checkLabel.style.display = 'inline';
        delEditBtns.style.display = 'inline';
        deleteBtn.style.marginRight = '5px';
        deleteBtn.style.padding = "5px 15px";
        editBtn.style.padding = "5px 15px";
        deleteBtn.style.border = '1px solid #706e6b';
        editBtn.style.border = '1px solid #706e6b';
        deleteBtn.classList.add('color');
        editBtn.classList.add('color');

        newElem.appendChild(checkLabel);
        newElem.appendChild(delEditBtns);
        ul.appendChild(newElem);
        let liCount = document.querySelectorAll('li').length;
        if(liCount > 0){
            newElem.style.borderBottom = '1px solid #706e6b';
            ul.appendChild(newElem);
        }
        checkLabel.addEventListener('mouseover', function(){
            label.style.textDecoration = 'line-through';
        });
        checkLabel.addEventListener('mouseout', function(){
            if(checkbox.checked == false){
                label.style.textDecoration = 'none';
            }
        });
        checkbox.addEventListener('change', function(){
            if(checkbox.checked){
                label.style.textDecoration = 'line-through';
                label.style.color = '#706e6b'
            }
        })
        deleteBtn.addEventListener('click', function(){
            ul.removeChild(newElem);
        })
        editBtn.addEventListener('click', function(){
            
        });
    }else if(i.length < 1){
        alert('The form must be filled');
    }
});

btn3.addEventListener('click', function(){
    if(btn3.classList.contains('filter')){
        let newUl = document.createElement('ul');
        ul.removeChild(newElem);
    }
})