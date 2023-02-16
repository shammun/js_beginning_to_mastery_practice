
// We used the following approach to create an object

/*

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

*/

// a better approach is to use the Object.create() method
// in this way, we will not need to create a new object for the methods
// in the createUser function, every time we add a new function
// to userMethods object

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

const user4 = createUser("Liton", "Miah", "liton22@yahoo.com", 29, "Mirpur, Dhaka");
const user5 =  createUser("Miron", "Manna", "miron@gmail.com", 44, "Dhanmondi, Dhaka");
console.log(user4.about());
console.log(user5.about());
console.log(user5.is18())

