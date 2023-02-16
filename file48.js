console.log(this) // returns
console.log(window) // also returns window object

console.log(this === window) // returns true

console.log("Hello") // returns true


function myFunc(){
    "use strict"
    console.log(this);
}

//window.myFunc(); // returns window object
myFunc(); // returns undefined
window.myFunc(); // returns window object

// with strict mode, to access window object, we need to use window.myFunc()

function myFunc2(){
    //"use strict"
    console.log(this);
}

//window.myFunc(); // returns window object
myFunc2(); // returns window object

