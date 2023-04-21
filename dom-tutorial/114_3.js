
// prepend() method adds a node to the beginning of the 
// list of children of a specified parent node, and returns 
// the new node.


// Adding text to new list item in a more efficient way
const todoList = document.querySelector(".todo-list");
const newTodoItem = document.createElement("li");
newTodoItem.textContent = "Teach ML";
todoList.prepend(newTodoItem);
console.log(todoList);