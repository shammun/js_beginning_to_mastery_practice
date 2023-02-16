
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
console.log(user4);