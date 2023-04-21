
// Adding click event to multiple elements (all the buttons)


// using simple for loop
/*
const allButtons = document.querySelectorAll(".my-buttons button");
// console.log(allButtons);

for(let i=0; i<allButtons.length; i++){
    allButtons[i].addEventListener("click", function(){
        console.log("You clicked me!");
        console.log(this); // will show the button element
    })
}
*/
/*

// using arrow function
const allButtons = document.querySelectorAll(".my-buttons button");
// console.log(allButtons);

for(let i=0; i<allButtons.length; i++){
    allButtons[i].addEventListener("click", (e)=>{
        console.log("You clicked me!");
        console.log(e.target.textContent); // will show the button element
    })
}

*/

/*
const allButtons = document.querySelectorAll(".my-buttons button");
for(let i=0; i<allButtons.length; i++){
    allButtons[i].addEventListener("click", function(){
        console.log(this.textContent);  // will show the button text
    })
}
*/
// Don't use arrow function with the above code as this 
// will refer to the window object and not the button element

// But also remember that most of the time we will be using
// arrow functions. We will see how to get the button element
// using arrow functions later.

/*
// 2. Using for of loop

const allButtons = document.querySelectorAll(".my-buttons button");
// console.log(allButtons);

for(let button of allButtons){
    button.addEventListener("click", function(){
        //console.log("You clicked me!");
        //console.log(this);
        console.log(this.textContent);
    })
}
*/
/*
// using arrow function
const allButtons = document.querySelectorAll(".my-buttons button");
// console.log(allButtons);

for(let button of allButtons){
    button.addEventListener("click", (e)=>{
        //console.log("You clicked me!");
        //console.log(this);
        console.log(e.target.textContent);
    })
}
*/

/*
// 3. using forEach method
const allButtons = document.querySelectorAll(".my-buttons button");
// console.log(allButtons);

allButtons.forEach(function(button){
    button.addEventListener("click", function(){
        // console.log("You clicked me!");
        console.log(this);
        console.log(this.textContent);
    })
});

*/

/*
const allButtons = document.querySelectorAll(".my-buttons button");
// console.log(allButtons);

allButtons.forEach(function(button){
    button.addEventListener("click", (e)=>{
        // console.log("You clicked me!");
        // console.log(this);
        console.log(e.target.textContent);
    })
});
*/

const allButtons = document.querySelectorAll(".my-buttons button");
// console.log(allButtons);

allButtons.forEach((button)=>{
    button.addEventListener("click", (e)=>{
        // console.log("You clicked me!");
        // console.log(this);
        console.log(e.target.textContent);
    })
});