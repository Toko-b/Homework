// task 1

function past(h, m, s){
  let hToMili = h*3600000;
  let mToMili = m*60000;
  let sToMili = s*1000;
  let sum = hToMili+mToMili+sToMili;
  return sum;
}

// task 2

function grow(x){
  let sum = 1
  for(let i = 0; i < x.length; i++){
    sum*= x[i];
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
      countPos++;
    }else if(input[i] < 0){
      sumNeg += input[i];
    }
  }
  return [countPos, sumNeg];
}