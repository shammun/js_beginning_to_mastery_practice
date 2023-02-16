// block scope vs function scope
// block scope

// let and const are block scoped
// var is function scoped

{
    let a = 10;
    console.log(a); // this will work
}
// console.log(a); // will throw error

{
    let a = 20;
    console.log(a); // this will work
}

{
    const a2 = 10;
    console.log(a2); // this will work
}
// console.log(a2); // will throw error

{
    const a2 = 20;
    console.log(a2); // this will work
}
// console.log(a2); // will throw error

const a2 = 100;
console.log(a2);

// for var, we can access the variable outside the block
{
    var a3 = 200;
    console.log(a3); // this will work
}
console.log(a3); // this will work too

// var can be accessed outside the block
// var can be accessed anywhere
{
    var firstName = "John";
    console.log(firstName);
}

{
    console.log(firstName); // it can access the previous block
}

 