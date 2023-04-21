
// some old methods to support poor IE
// appendChild;
// insertBefore;
// replaceChild;
// removeChild
// const ul = document.querySelector(".todo-list");

// new element
// const li = document.createElement("li");
// li.textContent = "new todo";


// const referenceNode = document.querySelector(".first-todo");

// ul.removeChild(referenceNode);

// use of appendChild
/* 
const ul = document.querySelector(".todo-list");
const li = document.createElement("li");
li.textContent = "New todo";
ul.appendChild(li);
*/

// use of insertBefore
/*
const ul = document.querySelector(".todo-list");
const li = document.createElement("li");
const referenceNode = document.querySelector(".first-node");
li.textContent = "Added with insertBefore";
ul.insertBefore(li, referenceNode);
*/

// use of replaceChild
/*
const ul = document.querySelector(".todo-list");
const li = document.createElement("li");
li.textContent = "Added with insertBefore";
const referenceNode = document.querySelector(".first-node");
ul.replaceChild(li, referenceNode);
*/

// use of removeChild
/*
const ul = document.querySelector(".todo-list");
const referenceNode = document.querySelector(".first-node");
ul.removeChild(referenceNode);
*/