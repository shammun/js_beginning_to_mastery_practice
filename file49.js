function hello(){
    console.log("Hello world");
}
hello(); // returns Hello world
window.hello(); // returns Hello world
hello.call(); // returns Hello world

// call, apply and bind are methods of functions


// call() method is used to call a function with a given this value and arguments provided individually

const  user1 = {
    firstName: "John",
    age: 8,
    about:  function(){
        console.log(this.firstName, this.age);
    }
}

const  user2 = {
    firstName: "Jane",
    age: 9, 
}

// using about() method of user1 object from user1 object

user1.about.call(user2); // returns Jane 9
user1.about.call(); // returns undefined undefined
user1.about.call(user1) // returns John 8
user1.about() // returns John 8



const  user3 = {
    firstName: "John",
    age: 8,
    about:  function(hobby, favMusician){
        console.log(this.firstName, this.age, hobby, favMusician);
    }
}

const  user4 = {
    firstName: "Jane",
    age: 9, 
}

// using about() method of user3 object from user4 object

user3.about.call(user4, ["reading", "Michael Jackson"]); // returns Jane 9 reading Michael Jackson
user3.about.call(user4, "reading", "Michael Jackson", "reading"); // returns Jane 9 reading Michael Jackson
user3.about.call(user4, "reading"); // returns Jane 9 reading undefined 
user3.about.call(user4, "reading", "Michael Jackson"); // returns Jane 9 reading Michael Jackson
//user3.about.call(user4, ["reading", "Michael Jackson"]); // returns Jane 9 reading Michael Jackson
user3.about.call(user4, ["reading", "Michael Jackson"], "Michael Jackson"); // returns Jane 9 reading Michael Jackson Michael Jackson


function about2(hobby, favMusician){
    console.log(this.firstName, this.age, hobby, favMusician);
}

const  user5 = {
    firstName: "Monty",
    age: 8,
    
}

const  user6 = {
    firstName: "Ronty",
    age: 9, 
}

about2.call(user5, "guitar", "Aiyub Bacchu"); // returns Monty 8 guitar Aiyub Bacchu

// apply() method is used to call a function with a given this value and arguments provided as an array

// instead of separate arguments, we can pass an array of arguments
about2.apply(user6, ["piano", "Tahsan"]) // returns Ronty 9 piano Tahsan


// bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.
// bind() method returns a function which we need to call
// similar to call but we will need to call the function returned by bind() method
const func = about2.bind(user5, "guitar", "James");
func(); // returns Monty 8 guitar James

about2.bind(user6, "guitar", "Minar")(); // returns Ronty 9 guitar Minar


