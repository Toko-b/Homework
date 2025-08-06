let arr = [1,3,4,6,7,5];

let allEven = arr.every(val => val%2 == 0);

let arr2 = ['World', "React", "Html", "Python"];

let hasLongString = arr2.some(value => value.length > 5);

let doubledNumbers = [];

arr.forEach(element => {
    doubledNumbers.push(element*2);
});

console.log(doubledNumbers);

let arr3 = [{name:'gio', age:15}, {name: 'tekla', age: 20}, {name:'beqa', age: 25}];

let allAdults = arr3.every(num => num.age > 18);


let products = [{name: 'apple',price: 5},{name:"egg", price:10},{name: "bread", price: 1.99},{name: "cupcake", price: 4.45},{name: "orangeJuice", price: 4.59},{name: "fijiWater", price: 3.99}];

let hasAffordableProduct = products.some(price => price.price < 20);

let customerOrders  = [{orderId: 63, customerId: 23, items: [{title: "Metro 2033", price: 32, quantity: 2}] ,shippingAddress: "The 'Friends' Apartment Building, Grove St", isDelivered: true}];

let allOrdersHaveItems = customerOrders.every(item => item.length > 1);

console.log(allOrdersHaveItems);

let hasPendingDelivery = customerOrders.some(order => order.isDelivered == false);

console.log(hasPendingDelivery)

customerOrders.forEach(el => {console.log(`Processing Order ID: ${el.orderId}`)
    el.items.every(pr => {if(pr.price > 10){
        console.log(`Order ${el.orderId} contains only expensive books: ${(pr.price > 10)}`)}
    })
    el.items.forEach(() => el.items.some(val => console.log(`Order ${el.orderId} has multiple copies of at least one book: ${(el.items.quantity > 1)}`)))
    el.items.forEach(item => {console.log(`- ${item.title} (Quantity: ${item.quantity})`)
})
})