
// keypress event
// mouseover event


// keypress event
const body = document.body;

body.addEventListener("keypress", (e)=>{
    console.log(e.key);
})


// mouseover event
const mainButton = document.querySelector(".btn-headline");
console.log(mainButton);
mainButton.addEventListener("mouseover", ()=>{
    console.log("mouseover event occurred!!!");
})

//const mainButton = document.querySelector(".btn-headline");
mainButton.addEventListener("mouseleave", ()=>{
    console.log("mouseleave event occurred!!!");
})
