
// synchronous programming vs asynchronous programming
// synchronous programming: one line of code is executed after the other
// asynchronous programming: one line of code is executed after the other, but not necessarily in order
// asynchronous programming is used to prevent the browser from freezing
// synchronous programming is single threaded meaning that only one line of code is executed at a time
// asynchronous programming is multi threaded meaning that multiple lines of code can be executed at the same time

/*
// synchronous programming example
console.log("script start");

for(let i=0; i<10000; i++) {
    console.log("inside for loop");
}

console.log("script end");
*/

// asynchronous programming example
// call a function after 1 second
/*
console.log("script start");
function hello(){
    console.log("hello!");
}
setTimeout(hello, 1000);
console.log("script end");
*/

/*
console.log("script start");
setTimeout(()=>{
    console.log("inside setTimeout");
}, 1000);
console.log("script end");
*/
/*
console.log("script start");
setTimeout(()=>{
    console.log("inside setTimeout");
}, 0);

for(let i=0; i<100; i++){
    console.log("....");
}
console.log("script end");
*/

/*
console.log("script start");
const id = setTimeout(()=>{
    console.log("inside setTimeout");
}, 0);

for(let i=0; i<100; i++){
    console.log("....");
}
console.log("setTimeout id is: ", id);
console.log("script end");
*/

console.log("script start");
const id = setTimeout(()=>{
    console.log("inside setTimeout");
}, 0);

for(let i=0; i<100; i++){
    console.log("....");
}
console.log("setTimeout id is: ", id);
console.log("clearing the timeout");
clearTimeout(id);
console.log("script end");

