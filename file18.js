// how to iterate objects

const person = {
    name: "John",
    age: 30,
    city: "New York",
    hobbies: ["music", "movies", "sports"]
};

// for in loop
for(let key in person){
    console.log(key, person[key]);
}
console.log(typeof (Object.keys(person))); // Object.keys() returns an array of keys

// for in loop -- another example
for(let key in person){
    console.log(`${key}: ${person[key]}`);
}

// for key of loop
for(let key of Object.keys(person)){
    console.log(person[key]);
}
