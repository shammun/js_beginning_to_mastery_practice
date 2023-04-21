
// Adding text to new list item in a more efficient way
const todoList = document.querySelector(".todo-list");
const newTodoItem = document.createElement("li");
newTodoItem.textContent = "Teach ML";
todoList.append(newTodoItem);
// we can also use appendChild() instead of append()
console.log(todoList);