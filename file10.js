// arrays

let fruits = ["apple", "banana", "orange", "mango", "grapes"];
let numbers = [10, 34, 56, 78, 90, 100];
let mixed = ["apple", 10, "banana", 34, "orange", 56, "mango", 78, "grapes", 90, 100];

console.log(fruits);
fruits[1] = "pineapple";
console.log(fruits);

console.log(numbers);
numbers[1] = 100;
console.log(numbers);

console.log(mixed);
mixed[1] = 100;
console.log(mixed);

// arrays are reference types
// reference types are objects

console.log(typeof fruits); // object



let obj = {}; // object literal
console.log(typeof obj); // object
console.log(Array.isArray(fruits)); // true

// array methods
// push
fruits.push("strawberry"); // adds element at the end
console.log(fruits);

// pop
fruits.pop(); // removes last element
console.log(fruits); 

// unshift
fruits.unshift("strawberry"); // adds element at the beginning
console.log(fruits);

// shift
fruits.shift(); // removes first element
console.log(fruits);

// splice -- removes elements from array
fruits.splice(1, 2); // removes 2 elements from index 1
console.log(fruits);

// splice -- adds elements to array
// exact opposite of the previous one
fruits.splice(1, 0, "banana", "mango"); // adds 2 elements at index 1
console.log(fruits);

// concat
let vegetables = ["tomato", "potato", "brinjal"];
let all = fruits.concat(vegetables);
console.log(all);

// slice
let sliced = all.slice(1, 4); // returns elements from index 1 to 3
console.log(sliced);

// reverse
console.log(all.reverse()); // reverses the array

// sort
console.log(all.sort()); // sorts the array

// join
console.log(all.join(' - ')); // joins the array elements with -

// indexOf
console.log(all.indexOf("banana")); // returns index of the element

// lastIndexOf
console.log(all.lastIndexOf("banana")); // returns index of the last element

// includes
console.log(all.includes("banana")); // returns true if element is present

// find
let numbers2 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let found = numbers2.find(function(value){
    return value > 50;
});
console.log(found); // returns first element greater than 50

let found3 = numbers2.find(function(value){
    return value > 50;
});
console.log(found3); // returns first element greater than 50

// findIndex
let found2 = numbers2.findIndex(function(value){
    return value > 50;
}); 
console.log(found2); // returns index of first element greater than 50

// filter
let filtered = numbers2.filter(function(value){
    return value > 50;
});
console.log(filtered); // returns all elements greater than 50      

// forEach
numbers2.forEach(function(value, index){
    console.log(value, index);
});
