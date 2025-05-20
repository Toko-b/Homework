function mathOperators(x, y){
    console.log((x + y) + ' ' + (y - x) + ' ' + (x * y) + ' ' + (y / x) + ' ' + (x ** y) + ' ' + (y % x));
}

mathOperators(25, 5);

function sumOfSquares(a, b){
    return (a**2) + (b**2);
}

console.log(sumOfSquares(5, 10));

function isEven(n){
    if(n % 2 == 0){
        return ("Even");
    }
    else{
        return ("Odd");
    }
}

console.log(isEven(10));

function repeatString(str, times){
    return str.repeat(times);
}

console.log(repeatString(("hello world "), 4));

function longerWord(word1, word2){
    if(word1.length == word2.length){
        return "Equal";
    }
    else if(word2.length > word1.length){
        return word2;
    }
    else{
        return word1;
    }
}

console.log(longerWord("Hello how are you doing", "im fine what about you"));

function toFahrenheit(celsius){
    let res = celsius * 1.8 + 32;
    return res;
}

console.log(toFahrenheit(15));

function isPositive(number){
    if(number > 0){
        return "positive";
    }
    else if(number === 0){
        return "number is zero";
    }
    else{
        return "negative";
    }
}

console.log(isPositive(-15));

function double(num){
    return num*2;
}

console.log(double(5));

function fullName(first, last){
    return first + ' ' + last;
}

console.log(fullName("tornike", "buskivadze"));

function  isAdult(age){
    if(age >= 18){
        return "Adult";
    }
    else{
        return "minor";
    }
}

console.log(isAdult(16));

function hasA(word){
    if(word.includes("a") || word.includes("A")){
        return 'Yes';
    }
    else{
        return 'No';
    }
}

console.log(hasA("mariami"));

function sameLastDigit(c, d){
    let lastdigit1 = c % 10;
    let lastdigit2 = d % 10;

    if(lastdigit1 == lastdigit2){
        return "same";
    }
    else{
        return "different";
    }
}

console.log(sameLastDigit(155, 375));

function evenOrOdd(num2){
    let wich = (num2 % 2 == 0) ? "even" : "Odd";
    return wich;
}

console.log(evenOrOdd(16));

function isShort(text){
    let wich2 = (text.length < 5) ? "short" : "long";
    return wich2;
}

console.log(isShort("hey"));

function numberSign(num3){
    let wich3 = (num3 > 0) ? "positive":
                (num3 < 0) ? "negative" : "zero";
    return wich3;
}

console.log(numberSign(0));