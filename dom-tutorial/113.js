// Add new HTML elements to page

// Add HTML element using innerHTML

const todoList = document.querySelector(".todo-list");
console.log(todoList.innerHTML);

// change the innerHTML
// todoList.innerHTML = "<li>New Todo</li>"
// console.log(todoList.innerHTML);

// Add to the existing HTML
todoList.innerHTML += "<li>New Todo</li>";
todoList.innerHTML += "<li>Teaching ML</li>";
todoList.innerHTML += "<li>Learning DS and Algo</li>";
console.log(todoList.innerHTML);

// when you should use it and when you should not use it

