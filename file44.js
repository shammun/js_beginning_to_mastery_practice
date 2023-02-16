// Maps
// Map is a collection of key value pairs
// duplicate keys are not allowed
// store  data in ordered fashion


// the below is called an object literal
// object literal
// key -> string
// value -> any type
const person = {
    firstName: 'John',
    age: 7,
    1: "one" // 1 will be considered as string
};

console.log(person.firstName);
console.log(person["firstName"]);

for(let key in person){
    console.log(typeof key);
}
console.log(person[1]);
// console.log(person.1); // error

// key value pair
// for Map, we can keep any type as key
const person2 = new Map();
person2.set('firstName', 'Munna');
person2.set('age', 33);
person2.set(1, 'one');
person2.set([1,2,3], 'onetwothree');
person2.set({1: 'one'}, 'onetwothree'); // object literal as key

console.log(person2);

// Accessing values of Map
console.log(person2.get('age'));
console.log(person2.get(1));
console.log(person2.keys());

// any type of data can be used as key

// we can iterate over keys of the Map

for(let key of person2.keys()){
    console.log(key, typeof key);
}

// in object, we couldn't use for of loop, we could use for in loop though
// but in Map, // we can directly use for of loop

const person3 = new Map();
person3.set('firstName', 'Munna');
person3.set('age', 33);
person3.set(1, 'one');

for(let key of person3){
    console.log(Array.isArray(key));
}

// destructuring -- refresh

// destructuring an array:
let arr = [1, 2, 3, 4, 5];
let [a, b, c] = arr;
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3

// destructuring an object:
let obj = { x: 1, y: 2, z: 3 };
let { x, y, z } = obj;
console.log(x); // 1
console.log(y); // 2
console.log(z); // 3

// back to Map
// destructuring with Map

for(let [key, value] of person3){
    console.log(key, value);
}

// another way to create map
const person4 = new Map([
    ['firstName', 'Munna'],
    ['age', 33]
]);
console.log(person4);

// add information to object but in a new object using Map
const person5 = {
    id: 1,
    firstName: 'Munna'
};
const person6 = {
    id: 2,
    firstName: 'Dipti'
};

const extraInfo = new Map();
extraInfo.set(person5, {age: 28, gender: 'Male'});
extraInfo.set(person6, {age: 18, gender: 'Female'});
console.log(extraInfo);
//console.log(person5.id);

//console.log(extraInfo.get(person5).gender);
//console.log(extraInfo.get(person6).gender);