let products  = [
    {name: "orange Juice", price: 5},
    {name: "knife pack", price: 20},
    {name: "grill", price: 500},
    {name: "skittles", price: 1.55},
    {name: "waffels", price: 3.70},
    {name: "watermelon", price: 3},
    {name: "Jack Daniels", price: 250}
];

let productNames = products.map(name => name.name);

console.log(productNames);

let affordableProducts = products.filter(val => val.price < 100);
console.log(affordableProducts);

let totalPrice = products.reduce((sum, vals) => sum + vals.price, 0);

console.log(totalPrice);

let productNamesReversed = productNames.reduceRight((x, y) => x + '-' + y, '');

console.log(productNamesReversed);