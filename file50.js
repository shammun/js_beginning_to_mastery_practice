
const user1 = {
    firstName: "Shammunul",
    age: 37,
    about: function(){
        console.log(this.firstName, this.age);
    }
}

// don't do the following mistake

const myFunc = user1.about; // this is not bounded yet
myFunc(); // returns undefined undefined
// here this value is window object



// do the following if you have to save the function inside an object as a variable
// if we want to bind this to user1 object, we need to use bind method

const myFunc2 = user1.about.bind(user1);
myFunc2(); // returns Shammunul 37