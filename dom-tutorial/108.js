
// get multiple elements using getElements by class name
// get multiple elements using querySelectorAll

// the below gives HTMLCollection
const navItems = document.getElementsByClassName("nav-item");
console.log(navItems);

console.log(navItems[0]);

console.log(typeof navItems); // it's array-like object

console.log(Array.isArray(navItems)); // false


// returns NodeList
const navItems2 = document.querySelectorAll(".nav-item");
console.log(navItems2[1])