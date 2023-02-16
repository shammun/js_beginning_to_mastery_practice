
let numbers = [1, 2, 3];
console.log(Array.prototype);
// In fact, Array is called internally by JS as new Array()
// and thus we get prototype of Array

console.log(Object.getPrototypeOf(numbers)); // 

function hello(){
    console.log("Hello");
}

console.log(Object.getPrototypeOf(hello)); //
console.log(hello.prototype);

// we can change the prototype of an object

hello.prototype = [];
console.log(hello.prototype);
hello.prototype.push('1');
console.log(hello.prototype);
