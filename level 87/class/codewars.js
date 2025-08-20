// task 1

let number = busStops =>{
  let leftBus = 0;
  let inBus = 0;
  for(let i of busStops){
    leftBus += i[1];
    inBus += i[0]
  }
  return inBus-leftBus;  
}

// task 2

let stray = numbers => numbers.find(n => numbers.indexOf(n) === numbers.lastIndexOf(n));