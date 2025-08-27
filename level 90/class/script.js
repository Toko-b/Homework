const sumNumbers = (...num) => {
    if(num.length < 1){
        return 0
    }else{
        return num.reduce((acc, dec) => acc+dec, 0);
    }
}

console.log(sumNumbers(1,2,3,4,5))
console.log(sumNumbers()) 