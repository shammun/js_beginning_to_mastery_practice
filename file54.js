
/*

// the following approach of creating objects as
// also shown in file53.js is called factory function

// this is not a good approach, because it creates a new function
// for each object

function createUser(firstName, lastName, email, age, address){
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = function(){
        return `${this.firstName} is ${this.age} years old`;
    };
    user.is18 = function(){
        return this.age >= 18;
    };
    return user;
}



const user1 = createUser("Shammunul", "Islam", "sha_is13@yahoo.com", 37, "Jalalaba R/A");
const user2 = createUser("Ruhul", "Khan", "ruhul@gmail.com", 39, "Banani, Dhaka");
const user3 = createUser("Milton", "Ahsan", "milton@gmail.com", 39, "Khilgaon, Dhaka");

// every time a new object is created, methods about and is18 will be created

*/

// better approach -- create a new object containing the two common methods

const userMethods = {
    about: function(){
        return `${this.firstName} is ${this.age} years old`;
    },
    is18: function(){
        return this.age >= 18;
    }
}

function createUser(firstName, lastName, email, age, address){
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = userMethods.about; // we are not calling the function here rather we are pointing to the address of the function
    user.is18 = userMethods.is18; // referencing to the function
    return user;
}

const user4 = createUser("Liton", "Miah", "liton22@yahoo.com", 29, "Mirpur, Dhaka");
const user5 =  createUser("Miron", "Manna", "miron@gmail.com", 44, "Dhanmondi, Dhaka");
console.log(user4.about());
console.log(user5.about());
console.log(user5.is18())

// if we want to add a new method to the userMethods object, we will also need to add it to the createUser

// let's examine it further in the next file



