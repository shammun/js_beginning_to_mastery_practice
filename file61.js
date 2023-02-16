


// constructor function name should start with capital letter and should be in camel case

// constructor function 
function CreateUser(firstName, lastName, email, age, address){
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


for(let key in user1){
    console.log(key); // will print all the properties of user1, even in the prototypes
}

// we can also use the following method to get all the properties of an object
// but this will not print the properties of the prototypes

for(let key in user1){
    if (user1.hasOwnProperty(key)){
        console.log(key);
    }
}