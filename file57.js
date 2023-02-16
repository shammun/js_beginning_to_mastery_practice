
function hello(){
    console.log("Hello world!");
}

// js function -- function + object

// console.log(hello.name); -- function name

// add your own properties

hello.myProperty = "Property defined by me";
console.log("hello.myProperty = " + hello.myProperty);

// only functions provide prototype property

console.log(hello.prototype); // returns constructor function

/*

In JavaScript, every function is an object, and like any object, it has properties and methods. One of those properties 
is the prototype property. The prototype property of a function is used to add properties and methods to all instances of the function.

The prototype property is an object that will become the prototype of any objects created using the function as a constructor. 
This means that any properties or methods added to the prototype will be shared by all instances of the function.

*/

hello.prototype.abc = "abc";
console.log(hello.prototype.abc);

hello.prototype.xyz = "xyz";
console.log(hello.prototype.xyz);

hello.prototype.sing = function(){
    return "la la la";
}
console.log(hello.prototype.sing());

// proto is property of object and it is a reference to an object

