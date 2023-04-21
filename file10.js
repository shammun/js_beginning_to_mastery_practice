// arrays

let fruits = ["apple", "banana", "orange", "mango", "grapes"];
let numbers = [10, 34, 56, 78, 90, 100];
let mixed = ["apple", 10, "banana", 34, "orange", 56, "mango", 78, "grapes", 90, 100];

console.log(fruits); // ["apple", "banana", "orange", "mango", "grapes"]
fruits[1] = "pineapple";
console.log(fruits); // ["apple", "pineapple", "orange", "mango", "grapes"]

console.log(numbers); // [10, 34, 56, 78, 90, 100]
numbers[1] = 100;
console.log(numbers); // [10, 100, 56, 78, 90, 100]

console.log(mixed); // ["apple", 10, "banana", 34, "orange", 56, "mango", 78, "grapes", 90, 100]
mixed[1] = 100;
console.log(mixed); // ["apple", 100, "banana", 34, "orange", 56, "mango", 78, "grapes", 90, 100]

// arrays are reference types
// reference types are objects

console.log(typeof fruits); // object

/* 

In JavaScript, an object literal is a way of creating a new object by specifying its properties 
and values in a concise syntax.

Here's an example of an object literal:

*/

const person = {
    name: 'John',
    age: 30,
    gender: 'male',
    occupation: 'developer'
};
  

/* 
  
 In this example, we're using an object literal to create a new object called person. The object 
 has four properties: name, age, gender, and occupation. The values of these properties are 
 specified after the property name, separated by a colon. Each property-value pair is separated by a comma.
  
*/

console.log(person); // prints the object

/*

Object literals can also contain methods (i.e., functions that are properties of the object). Here's 
an example:

*/

const calculator = {
    add: function(x, y) {
      return x + y;
    },
    subtract: function(x, y) {
      return x - y;
    }
  };
  
/*

In this example, we're creating a new object called calculator with two methods: add and subtract. The 
methods are defined using function expressions and are assigned as properties of the object.

*/

// using dot notation to call the add and subtract methods
const sum = calculator.add(4, 9);
const difference = calculator.subtract(10, 4);
console.log(`The sum of 4 and 9 is ${sum}`);
console.log(`The difference between 10 and 4 is ${difference}`);
// 

let obj = {}; // object literal
console.log(typeof obj); // object
console.log(`type of obj is Array, true or false -- ${Array.isArray(fruits)}`); // true

// array methods
// push
fruits.push("strawberry"); // adds element at the end
console.log(`push() adds strawberry at the end -- ${fruits}`);

// pop
fruits.pop(); // removes last element
console.log(`pop() removes last element or strawberry -- ${fruits}`); 

// unshift
fruits.unshift("strawberry"); // adds element at the beginning
console.log(`unshift(strawberry) adds strawberry at the beginning -- ${fruits}`);

// shift
fruits.shift(); // removes first element
console.log(`shift() removes first element or removes strawberry -- ${fruits}`);

// splice -- removes elements from array
fruits.splice(1, 2); // removes 2 elements from index 1
console.log(`splice(1, 2) removes 2 elements from index 1 and so removes pineapple and orange -- ${fruits}`);

// splice -- adds elements to array
// exact opposite of the previous one
fruits.splice(1, 0, "banana", "mango"); // adds 2 elements at index 1
console.log(`fruits.splice(1, 0, "banana", "mango") adds banana and mango at index 1 -- ${fruits}`);

// concat
let vegetables = ["tomato", "potato", "brinjal"];
let all = fruits.concat(vegetables);
console.log(all);

// slice
let sliced = all.slice(1, 4); // returns elements from index 1 to 3
console.log(`slice(1, 4) returns elements from index 1 to 3 -- ${sliced}`);

// reverse
console.log(`reverse() reverses the array -- ${all.reverse()}`); // reverses the array

// sort
console.log(`sort() sorts the array -- ${all.sort()}`); // sorts the array

// join
console.log(`join(' - ') joins the array elements by ' - '  -- ${all.join(' - ')}`); // joins the array elements with -

// indexOf
console.log(`all array -- ${all}`);
console.log(`indexOf() gives the index of "banana" in all -- ${all.indexOf("banana")}`); // returns index of the element

// lastIndexOf -- The lastIndexOf() method returns the index of the last occurrence of the specified value
console.log(`lastIndexOf() gives the index of the last occurrence of "banana" ${all.lastIndexOf("banana")}`); // returns index of the last occurrence of the element "banana"

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
