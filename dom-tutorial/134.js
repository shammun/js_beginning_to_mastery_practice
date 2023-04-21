
// Promise

/* 

In JavaScript, a Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. 
It allows you to handle asynchronous operations in a more structured way, making your code more readable and maintainable.

Promises have three states:

Pending: The initial state. The promise is neither fulfilled nor rejected.
Fulfilled: The operation completed successfully, and the promise has a resulting value.
Rejected: The operation failed, and the promise has a reason for the failure.
When you create a new Promise, you pass a function that defines the asynchronous operation to be performed. This function takes two arguments: 
resolve and reject. If the operation is successful, you call resolve and pass the result value. If the operation fails, you call reject and pass 
an error object or message.

*/

// Promising to cook fried rice

const bucket = ['coffee', 'chips', 'vegetables', 'salt']

// we promise to prepare fried rice if we have all the ingredients in the bucket
// produce promise
/*
const friedRicePromise = new Promise((resolve, reject)=>{
    if (bucket.includes("vegetables") && bucket.includes("rice") && bucket.includes("salt") && bucket.includes("chips") && bucket.includes("coffee")){
        resolve("Fried Rice") // we can also pass an object or an array
    } else{
        reject("No Fried Rice");
    }
});
*/

/*
// consume promise
friedRicePromise.then((myFriedRice)=>{
    // the argument passed to the resolve function is passed to the then function
    // as we passed "Fried Rice" to the resolve function, the value of myFriedRice
    // is "Fried Rice"
    console.log("let's eat ", myFriedRice);
})
*/

/*
friedRicePromise.then((myFriedRice)=>{
    console.log("let's eat ", myFriedRice);
}, (error)=>{console.log(error)})
*/

// if I only care about the success of the promise, I can use null as the first argument of the then method
// if I only care about the failure of the promise, I can use the catch method
/*
friedRicePromise.then((myFriedRice)=>{
    null;
}, (error)=>{console.log(error)})
*/

/*
const friedRicePromise = new Promise((resolve, reject)=>{
    if (bucket.includes("vegetables") && bucket.includes("rice") && bucket.includes("salt") && bucket.includes("chips") && bucket.includes("coffee")){
        resolve({value: "Fried Rice"}) // we can also pass an object or an array
    } else{
        reject(new Error("something missing from bucket"));
    }
});

friedRicePromise.then((myFriedRice)=>{
    console.log("let's eat ", myFriedRice);
}).catch((error)=>{console.log(error)})

*/


const friedRicePromise = new Promise((resolve, reject)=>{
    if (bucket.includes("vegetables") && bucket.includes("rice") && bucket.includes("salt") && bucket.includes("chips") && bucket.includes("coffee")){
        resolve({value: "Fried Rice"}) // we can also pass an object or an array
    } else{
        reject("something missing from bucket"); // this is different
    }
});

friedRicePromise.then((myFriedRice)=>{
    console.log("let's eat ", myFriedRice);
}).catch((error)=>{console.log(error)})