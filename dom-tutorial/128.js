
// console.log("Hello world!");

const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

// capturing events
// from the top to the bottom
child.addEventListener("click", ()=> {
    console.log("Capture !!! child");
}, true);

parent.addEventListener("click", ()=> {
    console.log("Capture !!! parent");
}, true);

grandparent.addEventListener("click", ()=> {
    console.log("Capture !!! grandparent");
}, true);

document.body.addEventListener("click", ()=> {
    console.log("Capture !!! body");
}, true);


// not capture -- bubbling
// from the bottom to the top
child.addEventListener("click", ()=> {
    console.log("Bubble child");
});

parent.addEventListener("click", ()=> {
    console.log("Bubble parent");
});

grandparent.addEventListener("click", ()=> {
    console.log("Bubble grandparent");
});

document.body.addEventListener("click", ()=> {
    console.log("Bubble body");
});








