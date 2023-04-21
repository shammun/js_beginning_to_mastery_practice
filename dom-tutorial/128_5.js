
// event delegation
const grandparent = document.querySelector(".grandparent");

grandparent.addEventListener("click", (e)=> {
    console.log(e.target);
});