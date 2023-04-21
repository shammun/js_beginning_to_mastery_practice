

// Without arrow function

// If the arrow function is not used, then this value will be the object itself where the function is called

const user0 = {
    firstName: "Shammunul",
    age: 37,
    about: function(){
        console.log(this); // this is user0 object
        console.log(this.firstName, this.age);
    }
}

user0.about(); // returns Shammunul 37



// arrow function

// arrow function takes this function from the surrounding
// scope, so it is not bound to the function itself

const user1  = {
    firstName: "Shammunul",
    age: 37,
    about: () => {
        console.log(this); // this is window object
        console.log(this.firstName, this.age);
    }
}

// here this value is window object
user1.about(); // returns window followed by undefined undefined

// For arrow function, even if we use call method, it will not work
user1.about.call(user1); // returns window followed by undefined undefined

user1.about(user1); // returns window followed by undefined undefined




