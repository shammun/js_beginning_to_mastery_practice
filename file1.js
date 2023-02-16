console.log("Hello from file1.js");
console.log("Hello again");

// ctrl + forward slash for comment
// console.log(); 

let age = 20;
let firstName = "John";

console.log(typeof(age)); // same as the below
console.log(typeof age);

// convert number to string
age = String(age);
console.log(typeof age);

// convert number to string -- again
age = age.toString();
console.log(typeof age);

// convert number to string -- again
age = age + "";
console.log(typeof age);

// convert string to number
age = Number(age);
console.log(typeof age);

// convert string to number -- again
age = +age;
console.log(typeof age);

// convert string to number -- again
age = parseInt(age);
console.log(typeof age);