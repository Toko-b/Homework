class Book{
    constructor(title, author, isAvailable){
        this.title = title;
        this.author = author;
        this.isAvailable = isAvailable
    }
    borrow(){
        if(this.isAvailable == true){
            return  `You borrowed ${this.title}`
        }else{
            return `Sorry, ${this.title} is not available.`
        }
    }
}

const map1 = new Map([['a1', 'მგელი'],['a2', "ლომი"],['a3', 'ძაღლი'],['a4', 'დელფინი'],['a5', 'გომბეშო']]);

console.log(map1.size);
console.log(map1.has("b1"))

for(let a of map1.entries()){
    console.log(a)
}

let set = new Set([1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,3,3,3,3,4,4,4,5]);

console.log(set)