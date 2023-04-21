
console.log("script started !!!!!!!!!");

const allButtons = document.querySelectorAll(".my-buttons button");

allButtons.forEach((button)=>{
    button.addEventListener("click", (e)=>{
        let num = 0;
        // we now add some delay so that it doesn't execute instantly
        for(let i=0; i<=100000000; i++){
            num += i;
        }
        console.log(e.currentTarget.textContent);
    })
});

let outerVar = 0;
for(let i=0; i<=100000000; i++){
    outerVar += i;
}
console.log("vALUE OF OUTERvAR: ", outerVar);
console.log("script ended !!!!!!!!!");