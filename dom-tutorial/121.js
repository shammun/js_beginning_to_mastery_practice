// this keyword

/*
const btn = document.querySelector(".btn-headline");
btn.addEventListener("click", function(){
    console.log("you clicked me");
    console.log(this);
    this.style.backgroundColor = "red";
})
*/

// Even if we declare function outside of the 
// addEventListener method, the this keyword will still refer 
// to the element that we are listening to the event on

/*
const btn = document.querySelector(".btn-headline");
function clickMe(){
    console.log("you clicked me");
    console.log(this);
    this.style.backgroundColor = "red";
}
btn.addEventListener("click", clickMe);
*/

// In case of arrow function, the value of this keyword 
// will be window or will be the value of this keyword in 
// the parent scope


const btn = document.querySelector(".btn-headline");
btn.addEventListener("click",()=>{
    console.log("you clicked me");
    console.log(this);
    //this.style.backgroundColor = "red";
})
