// get and set attribute

const link = document.querySelector('a');
console.log(link);
console.log(link.getAttribute('href'));
// to get Home and not #Home
console.log(link.getAttribute('href').slice(1));
link.setAttribute('href', "https://www.google.com");
console.log(link.getAttribute('href'));

const inputElement = document.querySelector(".form-todo input");
console.log(inputElement.getAttribute("type"));


