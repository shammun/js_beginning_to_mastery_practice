const sectionToDo = document.querySelector('.section-todo');

// listing class
console.log(sectionToDo.classList);

// Adding class
sectionToDo.classList.add('bg-dark');
console.log(sectionToDo.classList);

// Removing class
sectionToDo.classList.remove("container");
console.log(sectionToDo.classList);

// Does a class exist?
console.log(sectionToDo.classList.contains('container'));

// Toggle class
// if bg-dark is already there, remove it; if not, add it
// sectionToDo.classList.toggle('bg-dark');

const header = document.querySelector('.header');
// console.log(header.classList);
// header.classList.add("bg-dark");