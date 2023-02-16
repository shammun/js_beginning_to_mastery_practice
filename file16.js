// array destructuring

// saving array values to variables
const myArray = ["value1", "value2"];
let myVar1 = myArray[0];
let myVar2 = myArray[1];
console.log("value of myVar1", myVar1);
console.log("value of myVar2", myVar2);

// array destructuring -- alternative to the previous steps
const myArray2 = ["value1", "value2"];
// the below line assigns the first value of the array to var1 and the second value to var2
let [var1, var2] = myArray2; // this is called array destructuring

var1 = "new value"; // we can do this as we are using let
console.log("value of var1", var1);
console.log("value of var2", var2);

// but if we  array destructure using const, we will not
// be able to change the values of the variables
const [constVar1, constVar2] = myArray2;
// constVar1 = "new value"; // this will throw an error

// array destructuring
// assigning values to less number of variables
const myArray3 = ["value1", "value2", "value3"];
let [var3, var4] = myArray3;
console.log("value of var3", var3);
console.log("value of var4", var4);

// assigning values to more number of variables
const myArray4 = ["value1", "value2"];
let [var5, var6, var7] = myArray4;
console.log("value of var5", var5);
console.log("value of var6", var6);
console.log("value of var7", var7); // this will be undefined

// skipping values
const myArray5 = ["value1", "value2", "value3"];
let [var8, , var9] = myArray5;
console.log("value of var8", var8);
console.log("value of var9", var9);

// using slice
const myArray6 = ["value1", "value2", "value3", "value4"];
// the below line assigns the first value of the array to var10 
// and the rest of the values to var11
let [var10, ...var11] = myArray6; // this is called rest operator
let myNewArray = myArray6.slice(2); // this assigns values from the third index to the end of the array to myNewArray
console.log("value of var10", var10);
console.log("value of var11", var11);
console.log("value of myNewArray", myNewArray);

// array destructuring -- more
// let [..., var12] = myArray6; // can't do this as rest operator should be the last element
// console.log(var12);
