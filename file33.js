// important array methods

const numbers = [4, 3, 5, 6, 9];

function multiplyBy2(number, index){
    console.log(`index is ${index} number is ${number}`);
    // /console.log(`${number}*2 = ${number*2}`);
}

multiplyBy2(numbers[0], 0);
multiplyBy2(numbers[1], 1);

for(let i=0; i < numbers.length; i++){
    //console.log(i);
    multiplyBy2(numbers[i], i);
}

// using forEach method -- forEach method takes a callback function as a parameter
// similar to the previous one
numbers.forEach(multiplyBy2);

// define callback function inside the forEach method
numbers.forEach(function(number, index){
    console.log(`index is ${index} number is ${number}`);
})

// define callback function inside the forEach method -- another example
numbers.forEach(function(number, index){
    console.log(`${number}*10 = ${number*2}`);
})

// forEach with array of objects
const users = [
    { name: "John", age: 30, city: "New York" },
    { name: "Jane", age: 25, city: "Boston" },
    { name: "Jack", age: 40, city: "Miami" }
];

users.forEach(function(user){
    console.log(user.name);
})

// the same above functionality using for loop
for(let i=0; i < users.length; i++){
    console.log(users[i].name);
}   

// forEach using arrow function
// can have both user and index
users.forEach((user, index)=>{
    console.log(user.name, index);
});

// can have only user and not index
users.forEach((user) => {
    console.log(user.name);
})