
// changes the background color of a 
// page when a button is clicked

const mainButton = document.querySelector("button");
const body = document.querySelector("body");
// const currentColor = body.style.backgroundColor;
const currentColor = document.querySelector(".current-color");

function randomColorGeneration(){
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const randomColor = `rgb(${red}, ${green}, ${blue})`;
    return randomColor;
}

mainButton.addEventListener("click", ()=>{
    const randomColor = randomColorGeneration();
    body.style.backgroundColor = randomColor;
    currentColor.textContent = randomColor;
})