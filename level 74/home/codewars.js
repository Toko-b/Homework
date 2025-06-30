// task 1

function past(h, m, s){
  return (h*3600000+m*60000+s*1000);
}

// task 2

function grow(x){
  let sum = 1;
  for(let i = 0; i < x.length; i++){
    sum*= x[i]
  }
  return sum;
}

// task 3

function countPositivesSumNegatives(input){
  if(input == null || input.length < 1){
    return [];
  }
  let countPos = 0;
  let sumNeg = 0;
  for(let i = 0; i < input.length; i++){
    if(input[i] > 0){
      countPos++
    }else if(input[i] < 0){
      sumNeg += input[i];
    }
  }
  let list = [];
  list.push(countPos);
  list.push(sumNeg);
  return list;
}

// task 4

function replace(s) {
  let res = '';
  
  for(let i = 0; i < s.length; i++){
    let char = s[i];
    
    if(char === 'a' || char === 'e' || char === 'i' || char === "o" || char === "u" || char === "A" || char === 'E' || char === 'I' || char === "O" || char === "U"){
      res += '!';
    }else{
      res += char;
    }
  }
  return res

}

// task 5

function sameCase(a, b){
  let lowerLetters = ["a", "b", "c", "d", "e", 
               "f", "g", "h", "i", "j", "k", "l", "m", 
               "n", "o", "p", "q", "r", "s", "t", "u",
               "v", "w", "x", "y", "z"];
  let upperLetters = ["A", "B", "C", "D", "E", "F", "G", 
               "H", "I", "J", "K", "L", "M", "N", "O", 
               "P", "Q", "R", "S", "T", "U", "V", "W", 
               "X", "Y", "Z"];
  if(lowerLetters.includes(a) && lowerLetters.includes(b)){
    return 1;
  }else if(upperLetters.includes(a) && upperLetters.includes(b)){
    return 1;
  }else if(lowerLetters.includes(a) && upperLetters.includes(b)){
    return 0;
  }else if(upperLetters.includes(a) && lowerLetters.includes(b)){
    return 0;
  }else{
    return -1;
  }
}

// task 6

function printerError(s) {
  let err = 0;
  for(let i = 0; i < s.length; i++){
    if (s[i] < 'a' || s[i] > 'm'){
      err++;
    }
  }
  return `${err}/${s.length}`;
}

// task 7

function openOrSenior(data){
  let list = []
  for(let i =0; i < data.length; i++){
    if(data[i][0] >= 55 && data[i][1] >7){
      list.push('Senior');
    }else{
      list.push('Open');
    }
  }
  return list;
}