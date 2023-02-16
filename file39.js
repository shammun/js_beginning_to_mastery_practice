// every method and some method -- returns true or false
// callback function also returns true or false

const numbers = [2, 4,6, 8, 10];

const ans = numbers.every((number)=>number%2 === 0);
console.log(ans);

function isEven(number){
    return number % 2 === 0;
}

const ans2 = numbers.every(isEven);
console.log(ans2);

// every method -- continued
const userCart = [
    {productId: 1, quantity: 2, productName: 'laptop', price: 100000},
    {productId: 2, quantity: 1, productName: 'mobile', price: 8000},
    {productId: 3, quantity: 3, productName: 'tablet', price: 30000},
    {productId: 4, quantity: 4, productName: 'watch', price: 2000}
];

const ans3 = userCart.every((item)=>item.price<200000); // every item price is less than 200000
console.log(ans3);

// some method -- returns true or false
const ans4 = userCart.some((item)=>item.price>80000); // some item price is greater than 80000
console.log(ans4);