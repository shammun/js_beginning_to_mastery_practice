
// clone nodes
// suppose we want to both append and prepend a new item to the list
// we can clone and then append/prepend the cloned node
const ul = document.querySelector(".todo-list");
const li = document.createElement("li");
li.textContent = "Teach ML";
const li2 = li.cloneNode(true); // true means deep clone
ul.prepend(li);
ul.append(li2);

