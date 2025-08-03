let display = document.getElementById('expression');

let result = document.getElementById('result');

let operators = ['+', '-', '*', '/']

function press(char) {
    let lastChar = display.textContent.slice(-1);

    if (operators.includes(char) && (operators.includes(lastChar) || display.textContent == '')) {
        return;
    }

    if (char === '.') {
        if (display.textContent == '' || operators.includes(lastChar)) {
            appendChar('0.');
            return;
        }

        let parts = display.textContent.split(/[\+\-\*\/]/);
        let lastPart = parts[parts.length - 1];

        if (lastPart.includes('.')) {
            return;
        }
    }
    appendChar(char);
    display.scrollLeft = display.scrollWidth;
}

function calculate() {
    if (display.textContent == '') {
        return;
    }

    let lastChar = display.textContent.slice(-1);

    if (operators.includes(lastChar)) {
        return;
    }

    let evalResult = eval(display.textContent);

    if (isFinite(evalResult)) {
        result.textContent = evalResult;
    } else {
        result.textContent = 'Error';
    }
}

function del() {
    let lastChild = display.lastElementChild;
    if(lastChild) {
        lastChild.classList.add('pop-out');

        lastChild.addEventListener('animationend', () => {
            display.removeChild(lastChild);
        });
    }

    result.textContent = '';
}

function reset() {
    display.textContent = '';
    result.textContent = '';
}

function appendChar(char) {
    let span = document.createElement('span');
    span.textContent = char;
    span.classList.add('pop-in');
    display.appendChild(span);
}