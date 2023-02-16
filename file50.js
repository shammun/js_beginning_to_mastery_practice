
const user1 = {
    firstName: "Shammunul",
    age: 37,
    about: function(){
        console.log(this.firstName, this.age);
    }
}

// don't do the following mistake

const myFunc = user1.about();
myFunc(); // returns undefined undefined