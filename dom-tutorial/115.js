
// Another way to insert element using 
// elem.insertAdjacentHTML(where, html)

// Add one more list item under unordered list
const todoList = document.querySelector(".todo-list");
console.log(todoList);

todoList.insertAdjacentHTML("beforeend", "<li>Added using beforeend</li>");
console.log(todoList);

todoList.insertAdjacentHTML("afterbegin", "<li>Added using afterbegin</li>");
console.log(todoList);

todoList.insertAdjacentHTML("beforebegin", "<li>Added using beforebegin</li>");
console.log(todoList);

todoList.insertAdjacentHTML("afterend", "<li>Added using afterend</li>");
console.log(todoList);


