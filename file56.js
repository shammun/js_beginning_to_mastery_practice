
const obj1 = {
    key1: 'value1',
    key2: 'value2'
}

const obj2 = {
    key3: 'value3',
}

console.log(obj2.key3); // prints value3
console.log(obj2.key1); // prints undefined



// we want to see that if key1 is in obj3 and if it is not there\
// go to obj1 and get the value of key1

const obj3 = Object.create(obj1); // creates an empty object
// console.log(obj3);
obj3.key3 = "value3";
console.log(obj3.key1); // prints value1

obj3.key2 = "unique";
console.log(obj3.key2); // prints unique
console.log(obj3);


//  __proto__ is a property of an object
// also written as [[prototype]] in some versions of javascript
// it is a reference to the object that is used as a prototype

console.log(obj3.__proto__); // prints { key1: 'value1', key2: 'value2' }   

// prototype is different than __proto__ or [[prototype]]

// prototype is a property of a function

// __proto__ is a property of an object -- also known as dunderscore proto

// [[prototype]] is a property of an object

// __proto__ is a reference while prototype is an object of function

// proto is a reference to the chain being created

const userMethods = {
    about: function(){
        return `${this.firstName} is ${this.age} years old`;
    },
    is18: function(){
        return this.age >= 18;
    },
    sing: function(){
        return "la la la la";
    }
}

function createUser(firstName, lastName, email, age, address){
    const user = Object.create(userMethods);
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    return user;
}

/*

The line const user = Object.create(userMethods); creates a new object user and sets its prototype to the userMethods object.

The Object.create() method creates a new object and sets its prototype to the object passed as an argument. In this case, 
we're passing the userMethods object as the argument, so the user object will inherit all the properties and methods 
defined on the userMethods object.

By setting the user object's prototype to userMethods, we're creating a "prototype chain". This means that when we call a 
method on the user object, JavaScript first looks for the method on the user object itself. If the method isn't found, 
JavaScript looks for the method on the user object's prototype (userMethods). If the method still isn't found, 
JavaScript continues up the prototype chain until it reaches the Object.prototype object, which is the default prototype 
for all objects in JavaScript.

In this example, we're using the Object.create() method to create a new user object with its prototype set to userMethods. 
This means that the user object will inherit the about(), is18(), and sing() methods defined on userMethods, and we can 
call these methods on the user object as if they were defined directly on the user object itself.

*/

const user4 = createUser("Liton", "Miah", "liton22@yahoo.com", 29, "Mirpur, Dhaka");
const user5 =  createUser("Miron", "Manna", "miron@gmail.com", 44, "Dhanmondi, Dhaka");
console.log(user4.about());
console.log(user5.about());
console.log(user5.is18())
console.log(user4);