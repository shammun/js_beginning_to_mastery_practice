// static list vs live list


// static list
/*
const listItems = document.querySelectorAll(".todo-list li");
const sixthListItem = document.createElement("li");
sixthListItem.textContent = "Sixth todo -- added with static list";
const ul = document.querySelector(".todo-list");
ul.append(sixthListItem);
console.log(listItems); // this will not include the new item
// although the new item is added to the DOM, the static 
// list is not updated
*/

// live list
/*

const ul = document.querySelectorAll(".todo-list");
const listItems = ul.getElementsByTagName("li");

const sixthListItem = document.createElement("li");
sixthListItem.textContent = "Sixth todo -- added with live list";
const ul = document.querySelector(".todo-list");
ul.append(sixthListItem);
console.log(listItems); // this will include the new item
*/