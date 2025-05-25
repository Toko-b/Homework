function flight(flightID, flightStatus){
    this.flightID = flightID;
    this.flightStatus = flightStatus;
}

let flight1 = new flight("NGT 929", "in air");

console.log(`flight ${flight1.flightID} ${flight1.flightStatus}`);

function Product(prodtid, price){
    this.prodtid = prodtid;
    this.price = price;

    this.changePrice = function(){
        this.price = price * (100 - discount) / 100;
    }
}

let productId = prompt("Id : ");
let Price = Number(prompt("price : "));
let discount = Number(prompt("discount : "));

let prod1 = new Product(productId, price,);

prod1.changePrice(discount);

console.log(`Product ID ${prod1.productId}`);
console.log(`Discount Price ${prod1.price}`);