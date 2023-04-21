// events
// There are 3 ways to bind events to elements

// 1. using onclick attribute inside the HTML element inside the HTML file
// <button class="btn btn-headline" onclick="console.log('You clicked me!')">Learn More</button>

// 2.  select the element and specify what to do when the event happens
/*
const btn = document.querySelector(".btn-headline");
btn.onclick = function(){
    console.log("You clicked me!");
}
*/

// 3. select the element and use addEventListener method
// this is more efficient and flexible
// addEventListener takes 2 arguments: the event and the function to run when the event happens

/* 
const btn = document.querySelector(".btn-headline");
function clickMe(){
    console.log("You clicked me!");
}
btn.addEventListener("click", clickMe);
*/

/*
const btn = document.querySelector(".btn-headline");
btn.addEventListener("click", function(){
    console.log("You clicked me!");
})
*/

const btn = document.querySelector(".btn-headline");
btn.addEventListener("click", ()=>{
    console.log("Arrow function -- You clicked me!");
});