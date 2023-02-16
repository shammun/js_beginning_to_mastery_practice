
/*
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
*/


/* function createUser(firstName, lastName, email, age, address){
    const user = Object.create(userMethods);
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    return user;
}
 */

// We will add the functionalities of the userMethods object to the prototype of the createUser function

// prototype is simply an object

function createUser(firstName, lastName, email, age, address){
    // creates a new object user and sets its prototype to the createUser.prototype object
    // __proto__ is being set to the prototype of the createUser function
    const user = Object.create(createUser.prototype); // create sets the proto's value. Here it sets to prototype of createUser function
    // proto is a reference to the chain being created
    // In this case, proto will be an object

    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    return user;
}

/*

The line const user = Object.create(createUser.prototype); creates a new object user and sets its prototype to the createUser.prototype object.

In JavaScript, every function has a special prototype property that is used as the prototype for objects created using the function as a 
constructor. When you create a new object using the new keyword and a constructor function, the object's prototype is automatically set 
to the constructor's prototype property.

In this example, we're creating a new object user that has its prototype set to createUser.prototype. This means that the user object 
will inherit any properties or methods defined on createUser.prototype.

The Object.create() method is used to create a new object and set its prototype to a specific object. In this case, we're passing 
createUser.prototype as the argument to Object.create(), so the user object will inherit from createUser.prototype.

By setting the user object's prototype to createUser.prototype, we're creating a prototype chain that allows us to define shared 
methods and properties for all objects created using the createUser constructor function.

In this example, createUser.prototype is an object that can be used to define shared methods and properties for all user objects 
created using the createUser constructor function. This means that any methods or properties defined on createUser.prototype 
will be inherited by all user objects created using the createUser constructor function.

*/

createUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old`;
}

createUser.prototype.is18 = function(){
    return this.age >= 18;
}

createUser.prototype.sing = function(){
    return "la la la la";
}


console.log(createUser.prototype);

const user4 = createUser("Liton", "Miah", "liton22@yahoo.com", 29, "Mirpur, Dhaka");
const user5 =  createUser("Miron", "Manna", "miron@gmail.com", 44, "Dhanmondi, Dhaka");
console.log(user4);
console.log(user4.about());
console.log(user5.about());
console.log(user5.is18())

console.log(user4.sing())