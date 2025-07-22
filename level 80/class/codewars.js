// task 1

let invert = a => {
  let array = [];
  if(a.length < 1 || a == null){
    return [];
  }
  for(let i of a){
    array.push(-i);
  }
  return array;
}

// task 2

let getAverage = m => {
  let avg = 0;
  let count = 0;
  for(let i of m){
    avg += i;
    count++;
  }
  avg = avg/count;
  return Math.floor(avg);
}

// task 3

function digitize(n) {
  let str_n = n.toString();
  let list_1 = str_n.split('');
  list_1.reverse();
  return list_1.map(Number);
}