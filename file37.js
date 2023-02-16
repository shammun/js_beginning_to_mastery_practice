// sort

const numbers = [5,9,1200,410,3000];
// ["5", "9", "1200", "410", "3000"] // js converts it into string
// [53, 57, 49, 52, 51] // js converts it into ascii code
// in the above line, "1200" will be considered as 1 and the ASCII value of 1 is 49

// sort method sorts the array in ascending order

const userNames = ['John', 'Jane', 'Jack', 'Jill', 'Joe'];
userNames.sort();
console.log(userNames);

// ascending order
numbers.sort((a,b)=>{
    return a-b;
});
console.log(numbers);

// descending order
numbers.sort((a,b)=>{
    return b-a;
});
console.log(numbers);

// sorting array of objects
const products = [
    {productId: 1, productName: "p1", price: 300},
    {productId: 2, productName: "p2", price: 3300},
    {productId: 3, productName: "p3", price: 1200},
    {productId: 4, productName: "p4", price: 300},
    {productId: 5, productName: "p5", price: 1500}
];

// low to high
products.sort((a, b)=>{
    return a.price - b.price;
});
console.log(products);

// high to low
products.sort((a, b)=>{
    return b.price - a.price;
});
console.log(products);

// But this is changing products and we don't to do that. In
// order to avoid that, we can use slice method

// low to high
const lowToHigh = products.slice(0).sort((a, b) => {
    return a.price - b.price;
});
console.log(lowToHigh);

// high to low
const highToLow = products.slice(0).sort((a, b) => {
    return b.price - a.price;
});
console.log(highToLow);