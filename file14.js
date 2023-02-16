const pi=3.14;
// the below line will throw error
// pi= 12;
console.log(pi);

// can push to constant array
// this will be stored in heap memory
// when doing push, we are not changing address and so
// we can push
const fruits = ["apple", "orange", "banana"];
fruits.push("banana");
// the below line will throw error
// fruits = ["banana", "mango"]

// can change the value of constant object
// this will be stored in heap memory
// when doing push, we are not changing address and so
// we can push
const person = {
    name: "John",
    age: 30
};
person.name = "Peter";
person.age = 40;
// the below line will throw error
// person = {
//     name: "Peter",
//     age: 40
// }


