function sumTwoSmallestNumbers(numbers) {
  let sum = 0;
  
  numbers.sort(function(a, b){return a - b})
  
  sum += numbers[0] + numbers[1];
  
  return sum;
}

var isSquare = function(n){
  let sQ = Math.sqrt(n);
  
  if(sQ === Math.floor(sQ)){
    return true;
  }else{
    return false;
  }
}

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
