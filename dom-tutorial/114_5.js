
// inserting before and after an element

// inserting before an element
const newTodoItem = document.createElement("li");
newTodoItem.textContent = "Teach ML";
const todoList = document.querySelector(".todo-list");
todoList.before(newTodoItem);

// inserting after an element
const newTodoItem2 = document.createElement("li");
newTodoItem2.textContent = "Teach ML";
const todoList2 = document.querySelector(".todo-list");
todoList2.before(newTodoItem2);
