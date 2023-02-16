// methods
// function inside object

const person = {
    firstName: "John",
    age: 33,
    about: function(){
        console.log("Person's name is John and age is 33");
    }
};

// Access  this function or method inside person
console.log(person.about); // returns or print the function

// calling the function inside person
person.about(); // returns or print the function


const person2 = {
    firstName: "Lipon",
    age: 43,
    about: function(){
        console.log(`Person's name is ${this.firstName} and age is ${this.age}`);
    }
    // We can't write console.log(`Person's name is ${firstName} and age is ${age}`), rather have to use this keyword to access the object's property
    // here this will refer to the object person2 which will be calling the method about
};

person2.about();

// this keyword
// this keyword refers to the object that is executing the current function

const person3 = {
    firstName: "Lipon",
    age: 43,
    about: function(){
        console.log(this);
    }
};
person3.about(); // prints the object person3

// methods -- continued 
const person4 = {
    firstName: "Shammun",
    age: 33,
    about: function(){
        console.log(this.firstName, this.age);
    }
};
person4.about(); // prints the object person4

// in below, this refers to the object that is executing the current function
function personInfo(){
    console.log(`person name is ${this.firstName} and age is ${this.age}`);
}

const person5 = {
    firstName: "Shammun",
    age: 37,
    about: personInfo
};

const person6 = {
    firstName: "Mohsin",
    age: 47,
    about: personInfo
};

const person7 = {
    firstName: "Mokhtar",
    age: 57,
    about: personInfo
};

person5.about();
person6.about();
