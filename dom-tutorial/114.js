
// todo-list before appending
const todoList = document.querySelector(".todo-list");
console.log(todoList);

const newTodoItem = document.createElement("li");
const newTodoItemNext = document.createTextNode("Teach ML");
newTodoItem.append(newTodoItemNext);
todoList.append(newTodoItem);



// todo-list after appending
console.log(newTodoItem);
console.log(todoList);

