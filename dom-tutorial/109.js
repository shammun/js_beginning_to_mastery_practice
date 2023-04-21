
// loop through all links on page

// want to make color of all links on page green and 
// background white


// HTMLCollection
// HTMLCollection is array-like object -- can use index and has
// length property
// const navItems = document.getElementsByClassName("nav-item");
const navItems = document.getElementsByTagName("a");
console.log(navItems);
console.log(navItems.length);
// We can't use forEach on HTMLCollection

// simple for loop
// for of loop
// forEach -- can't use with HTMLCollection

// simple for loop
for (let i = 0; i < navItems.length; i++) {
  console.log(navItems[i]);
}

for (let i = 0; i < navItems.length; i++) {
    const navItem = navItems[i];
    navItem.style.backgroundColor = "white";
    navItem.style.color = "green";
    navItem.style.fontWeight = "bold";
  }

  // for of loop
  for (let navItem of navItems){
    navItem.style.backgroundColor = "blue";
    navItem.style.color = "black";
    navItem.style.fontWeight = "bold";
  }

  // the below will not work
  /*
  navItems.forEach((navItem)=>{
    navItem.style.backgroundColor = "blue";
    navItem.style.color = "black";
    navItem.style.fontWeight = "bold";
  })
  */

  // But we can convert HTMLCollection to array
    // using Array.from

    const navItemsArray = Array.from(navItems);
    console.log(navItemsArray);
// Now, we can use forEach
    navItemsArray.forEach((navItem)=>{
        navItem.style.backgroundColor = "azure";
        navItem.style.color = "pink";
        navItem.style.fontWeight = "bold";
      })

// querySelectorAll returns NodeList
// with this we can use all three loops:
// simple for loop, for of loop, forEach loop

const navItems3 = document.querySelectorAll("a");
console.log(navItems3);

// simple for loop
for (let i = 0; i < navItems3.length; i++) {
    const navItem = navItems3[i];
    navItem.style.backgroundColor = "white";
    navItem.style.color = "green";
    navItem.style.fontWeight = "bold";
  }

// for of loop
for (let navItem of navItems3){
    navItem.style.backgroundColor = "blue";
    navItem.style.color = "black";
    navItem.style.fontWeight = "bold";
  }

// forEach loop
navItems3.forEach((navItem)=>{
      navItem.style.backgroundColor = "azure";
      navItem.style.color = "pink";
      navItem.style.fontWeight = "bold";
    })