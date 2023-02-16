
// new keyword -- creates empty object 

// this = {}

function createUser(firstName, age){
    this.firstName = firstName;
    this.age = age;
}

createUser.prototype.about = function(){
    console.log(`${this.firstName} is ${this.age} years old`);
}


// Object.create(createUser.prototype) -- this work is automatically done by the new keyword
// But, we had to do it separately in the previous file
const user1 = new createUser('John', 25);
console.log(user1); // returns createUser {firstName: "John", age: 25}

// this is why, we don't need to do this "Object.create(createUser.prototype)"
// before calling the about method

console.log(user1.about())