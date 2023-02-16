// reduce method

const numbers = [1,2,3,4,5,10];

// sum of all the numbers in the array
const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
});

console.log(sum);

 const userCart = [
    { name: "laptop", price: 1000, quantity: 1 },
    { name: "desktop", price: 2000, quantity: 2 },
    { name: "mobile", price: 500, quantity: 4 },
    { name: "tablet", price: 300, quantity: 3 }
 ];

 const totalAmount = userCart.reduce((totalPrice, currentProduct) => {
    return totalPrice + currentProduct.price;
 }, 0);

 console.log(totalAmount);