
/*
const user1  = {
    firstName: "Shammunul",
    age: 37,
    about: function(){
        //console.log(this); // this is window object
        console.log(this.firstName, this.age);
    }
}
*/

// The above code is equivalent to the following code

const user1  = {
    firstName: "Shammunul",
    age: 37,
    about(){
        //console.log(this); // this is window object
        console.log(this.firstName, this.age);
    }
}

user1.about();

