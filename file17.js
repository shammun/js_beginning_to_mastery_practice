// objects
// objects store key value pairs
// objects are mutable
// objects are unordered
// objects are accessed using keys
// objects have keys and values

const person = {"name": "John", "age": 30, "city": "New York"};

// accessing object values using dot notation
console.log(person.name);
console.log(person.age);
console.log(person.city);

console.log(typeof person);

// accessing object values using bracket notation
console.log(person["name"]);
console.log(person["city"]);

// we can have array as values of an object
const person2 = {"name": "John", "age": 30, "city": "New York", "hobbies": ["music", "movies", "sports"]};
console.log(person2.hobbies[1]);

// how to add key value pairs to an object
person2["email"] = "sha_is13@gmail.com";
console.log(person2);
console.log(person2.email);
console.log(person2["email"]);

const person3 = {
    "name": "John",
    "age": 30,
    "city": "New York",
    "hobbies": ["music", "movies", "sports"]
};

person3["gender"] = "male";
console.log(person3.gender);

// difference between dot and bracket notation
// dot notation is used when we know the key
// bracket notation is used when we don't know the key
// bracket notation is used when we have a variable as key
// bracket notation is used when we have a key with spaces

const key = "email";
const person4 = {
    name: "John",
    age: 30,
    city: "New York",
    "person hobbies": ["music", "movies", "sports"]
};

console.log(person4["person hobbies"]); 

// Suppose we want the value of the variable key to be the key
// for person4 object. Now, using dot notation will not work

person4.key = "sha_is13@gmail.com";
console.log(person4);

// But we want the value of the variable key to be the key
// solution is using bracket notation
person4[key] = "sha_is13@gmaill.com";
console.log(person4);

// remove a key value pair from an object
delete person4["key"];
console.log(person4);