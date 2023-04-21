
const rootNode = document.getRootNode();
console.log(rootNode);

console.log(rootNode.childNodes);

const htmlElementNode = rootNode.childNodes[0];
console.log(htmlElementNode);

console.log(htmlElementNode.childNodes); // NodeList(3) [head, text, body]

const headElementNode = htmlElementNode.childNodes[0];
console.log(headElementNode);

const textNode = htmlElementNode.childNodes[1];
console.log(textNode);

const bodyElementNode = htmlElementNode.childNodes[2];
console.log(bodyElementNode);

// parent node of head element
console.log(headElementNode.parentNode);

// sibling relation
console.log(headElementNode.nextSibling);

// two siblings next to head element
console.log(headElementNode.nextSibling.nextSibling);

// nextElementSibling -- it will ignore textNode consisting of
// space and new line
// this will return body element
console.log(headElementNode.nextElementSibling);

console.log(headElementNode.childNodes);

// Select heading, go to its parent and then change the 
// background color and text color of this parent

const h1 = document.querySelector("h1");
const div = h1.parentNode;
div.style.color = "#efefef";
div.style.backgroundColor = "#333";

// reach body element from heading and then change the 
// background color and text color of this parent
const body = h1.parentNode.parentNode;
body.style.color = "#efefef";
body.style.backgroundColor = "#333";

// A different way to select body element and do the same tasks
// as before

const body2 = document.body;
body.style.color = "#efefef";
body.style.backgroundColor = "#333";

// We can use querySelector to select an HTML element.
// We can again use querySelector to select HTML elements within
// the first selected element

// In the example below, we select head first using
// querySelector and then select title by again using 
// querySelector on the head element

const head = document.querySelector("head");
const title = head.querySelector("title");
console.log(title);


const container = document.querySelector(".container");
// .childNodes property includes text nodes
console.log(container.childNodes); // includes text nodes
// representing new line and space


// .children property does not include text nodes
console.log(container.children); // does not include text nodes
// representing new line and space

