/*

In JavaScript, let and var are both used to declare variables, but they have some differences in their behavior.

var was the primary way to declare variables in JavaScript before the introduction of let in ES6.

Here are the main differences between let and var:

Scoping:

var has function scope, which means that a variable declared with var is accessible throughout the entire function, 
regardless of where it was declared within the function. let has block scope, which means that a variable declared 
with let is only accessible within the block it was declared in (i.e., between the {}).

Hoisting:

var variables are hoisted to the top of their function or global scope, which means that they can be used before 
they are declared (although their value will be undefined until they are initialized). let variables are not 
hoisted, and if you try to use a let variable before it is declared, you will get a ReferenceError.

Re-declaration:

var variables can be re-declared within the same scope without causing an error. let variables cannot be re-declared 
within the same scope, and attempting to do so will result in a SyntaxError.

*/

function example() {
    var x = 1;
    if (true) {
      var x = 2;
      console.log(x); // 2
    }
    console.log(x); // 2
  }
  
  function example2() {
    let x = 1;
    if (true) {
      let x = 2;
      console.log(x); // 2
    }
    console.log(x); // 1
  }
  
  example(); // Outputs: 2, 2
  example2(); // Outputs: 2, 1