// task 1

let XO = str => {
  let countX = 0;
  let countO = 0;
  for(let i of str){
    if(i === 'o' || i ==="O"){
     countO++
    }else if(i === "x" || i ==="X"){
      countX++
    }
  }
  if(countX == countO){
    return true
  }else if(countX == 0 && countO == 0){
    return true
  }else{
    return false
  }
}
// task 2

let gimme = triplet => {
  if(triplet[0] > triplet[1] && triplet[0] < triplet[2]){
    return triplet.lastIndexOf(triplet[0])
  }else if(triplet[1] > triplet[0] && triplet[1] < triplet[2]){
    return triplet.lastIndexOf(triplet[1])
  }else if(triplet[2] > triplet[0] && triplet[2] < triplet[1]){
    return triplet.lastIndexOf(triplet[2])
  }else if(triplet[0] < triplet[1] && triplet[0] > triplet[2]){
    return triplet.lastIndexOf(triplet[0])
  }else if(triplet[1] < triplet[0] && triplet[1] > triplet[2]){
    return triplet.lastIndexOf(triplet[1])
  }else if(triplet[2] < triplet[0] && triplet[2] > triplet[1]){
    return triplet.lastIndexOf(triplet[2])
  }
}

// task 3

let getDivisorsCnt = n => {
      let count = 0;
      for (let i = 1; i <= Math.sqrt(n); i++){
          if (n % i == 0) {
              if (n / i == i) count++;
              else count = count + 2;
          }
      }
      return count;
}

//task 4

let getAverage = marks => {
  let sum = 0;
  for(let i of marks){
    sum+= i;
  }
  return Math.floor((sum/marks.length));
}

// task 5
let digitize = n => {
  return n.toString().split('').reverse().map(Number);
}