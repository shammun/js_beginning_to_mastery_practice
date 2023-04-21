// event object
/*
const firstButton = document.querySelector("#one");

firstButton.addEventListener("click", function(){
    console.log(this);
});
*/

// whenever event listener is added to any element, JS engine executes
// line by line. 

// browser ---- js Engine + extra feature
// browser ---- js Engine _ Web API

// Whenever browser encounters an event it is listening to
// 1.  Gives callback function to JS Engine
// 2. With the callback function, it also gives information on the event
// happened or an object called event object

/*

const firstButton = document.querySelector("#one");

firstButton.addEventListener("click", function(abc){
    console.log(abc.target); // will show the event object
});

*/
/*
const allButtons = document.querySelectorAll(".my-buttons button");

for(let i=0; i<allButtons.length; i++){
    allButtons[i].addEventListener("click", (e)=>{
        console.log(e.currentTarget); // will show the button element
    })
}
*/


const allButtons = document.querySelectorAll(".my-buttons button");
// console.log(allButtons); // gives NodeList of buttons

for(let button of allButtons){
    button.addEventListener("click", (e)=>{
        console.log(e.currentTarget);
    })
}
