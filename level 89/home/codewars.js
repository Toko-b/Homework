// task 1

function squareDigits(num){
  return Number(('' + num).split('').map(val => {return val * val}).join(''));
}

// task 2

let countSmileys = arr => {
  if ( arr.length === 0 )  { 
    return 0;
  }
  let incr = 0;
  let validSmileys = [":)",";)",":D",";D",":-D",":~D",":-)",":~)",";~D",";~)",";-D",";-)"]
  for (let face of arr) { 
    if (validSmileys.includes(face)) { 
      incr++;
    }
  }
  return incr;
}



// task 3
function digitalRoot(n) {
  return ((n - 1) % 9) + 1;
}

// task 4

function highAndLow(numbers){
  numbers = numbers.split(" ");
  return Math.max(...numbers) +" "+ Math.min(...numbers);
}

// task 5

let isIsogram = str => {
  str = str.toLowerCase();
  let arr = Array.from(str)
  
  for(let char of arr){
    if(arr.indexOf(char) !== arr.lastIndexOf(char)){
      return false 
    }
  }
  return true
}