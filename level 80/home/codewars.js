// task 1

let likes = n => {
  if(n.length < 1 || n == null){
    return "no one likes this";
  }
  if(n.length == 1){
    return `${n[0]} likes this`;
  }else if(n.length == 2){
    return `${n[0]} and ${n[1]} like this`;
  }else if(n.length == 3){
    return `${n[0]}, ${n[1]} and ${n[2]} like this`;
  }else if(n.length == 4 || n.length > 4){
    return `${n[0]}, ${n[1]} and ${n.length-2} others like this`;
  }
}

// task 2

function digitize(n) {
  let str_n = n.toString();
  let list_1 = str_n.split('');
  list_1.reverse();
  return list_1.map(Number);
}

// task 3

let check = (a, x) => a.includes(x) ? true : false;

// task 4

let simpleMultiplication = num => num%2 === 0 ? num*8 : num*9;

// task 5

let validateNumber = str => {
  if((str.length === 11 && str[0] == '0' && str[1] == '7')|| 
     (str.length === 13 && str[0] == "+" && str[1] == "4" && str[2] == "4" && str[3] == 7)
      ||(str.includes('-'))){
    return "In with a chance";
  }else{
    return "Plenty more fish in the sea";
  }
}
