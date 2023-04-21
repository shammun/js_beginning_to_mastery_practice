
// how to get the dimensions of element

// height and width of element

const sectionTodo = document.querySelector('.section-todo');
const info = sectionTodo.getBoundingClientRect();
console.log(info);

const height = sectionTodo.getBoundingClientRect().height;
console.log(height);

const width = sectionTodo.getBoundingClientRect().width;
console.log(width);

const top_val = sectionTodo.getBoundingClientRect().top;
console.log(top_val);