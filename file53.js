
// Object oriented programming concept starts from here


const user = {
    firstName: "Shammunul",
    lastName: "Islam",
    email: "sha_is113@yahoo.com",
    age: 37,
    address: "House 40/10, ABCD R/A, Sylhet, Bangladesh",
    about: function(){
        return `${this.firstName} is ${this.age} years old`;
    },
    is18: function(){
        return this.age >= 18;
    }
}

// Now we will create a function that will create object
// add key value pairs
// return that user object

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
console.log(user1);
const is18 = user1.is18();
console.log(is18);

const about = user1.about();
console.log(about);





