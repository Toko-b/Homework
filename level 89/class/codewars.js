// task 1

const sumNested = arr => {
  return arr.reduce((acc, val) => {
    if(Array.isArray(val)){
      return acc + sumNested(val);
    }else{
      return acc + val
    }
  }, 0)
}

// task 2
let repeatStr = (n, s) => s.repeat(n);

// task 3

function removeChar(str) {
  let string = "";
  if (str.length <= 2) {
    return "";
  }
  let arr = [];
  for (let i of str) {
    arr.push(i);
  }
  arr.shift();
  arr.pop();
  for (let i of arr) {
    string += i;
  }
  return string;
}

