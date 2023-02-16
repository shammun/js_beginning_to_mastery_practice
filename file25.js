// hoisting
// will work for function declaration
sayHello();

// function declaration
function sayHello(){
    console.log("hello");
}

// hoisting will not work for function expression
// now this will not work
// hello2();

const hello2 = function(){
    console.log("hello");
};

// hoisting will not work for arrow function
// now this will not work
// hello3();

const hello3 = () => {
    console.log("hello");
};

// variable can't be accessed before it's declared
// the following line will return error
// console.log(x);

// variable declaration
let x = 5; // with let error will be thrown when this variable is called before this line

// variable can't be accessed before it's declared
// the following line will return undefined
console.log(y);

// variable declaration
var y = 5; // with var undefined will be returned when this variable is called before this line


