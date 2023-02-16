let array1 = ["item1", "item2"];
let array2 = array1;

console.log(array1);
console.log(array2);

array1.push("item3");
console.log("After pushing element to array1");
console.log("array1",array1);
console.log("array2",array2); // array2 is also changed