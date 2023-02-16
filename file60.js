
// constructor function name should start with capital letter and should be in camel case

// constructor function 
function CreateUser(firstName, lastName, email, age, address){
    // using new to create new empty object will set something like "this = {}" here
    // that's why the following line is not needed
    //const user = Object.create(createUser.prototype)
    // and because of the new keyword, we can just use this to set the properties
    // and this is different than what we have done 
    // in file58.js
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
    // we can write ""return this;"" here but it is not needed
}
CreateUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old.`;
};
CreateUser.prototype.is18 = function (){
    return this.age >= 18; 
}
CreateUser.prototype.sing = function (){
    return "la la la la ";
}


const user1 = new CreateUser('harshit', 'vashsith', 'harshit@gmail.com', 18, "my address");
const user2 = new CreateUser('harsh', 'vashsith', 'harshit@gmail.com', 19, "my address");
const user3 = new CreateUser('mohit', 'vashsitha', 'harshit@gmail.com', 17, "my address");
console.log(user1);
console.log(user1.is18());