// clone array

let array1 = ["item1", "item2"];

// First way
console.log("First method using ...");
let array2 = [...array1];

array1.push("item3");
console.log("After pushing element to array1");
// Now, array1 and array2 are different
console.log("Are array1 and array2 are the same", array1 === array2); 

console.log("array1",array1);
console.log("array2",array2); // "item3" is not added to array2
console.log("");

// Second way
console.log("Second method using slice");
let array3 = array1.slice();

array1.push("item4");
console.log("After pushing element to array1");
console.log("Are array1 and array3 aer the same", array1 === array2);

console.log("array1",array1);
console.log("array3",array3);
console.log("");

// Third way
console.log("Third method using concat");
let array4 = array1.concat();

array1.push("item5");
console.log("After pushing element to array1");
console.log("Are array1 and array4 aer the same", array1 === array2);

console.log("array1",array1);
console.log("array4",array4);

// Compare this snippet from file12.js:
