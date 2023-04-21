
// repeatedly execute a specified function at a set interval of time

/*
// Here's an example of how to use `setInterval()` to display a message every 1 second:

setInterval(() => {
  console.log("Hello, world!");
}, 1000);
*/

/*
// the following code stops the execution of the 
// `setInterval()` function after 5 seconds
const intervalId = setInterval(() => {
    console.log("Hello, world!");
  }, 1000);
  
  setTimeout(() => {
    clearInterval(intervalId);
  }, 5000);
  */
/*
  console.log("script start");
  setInterval(()=>{
    console.log(Math.random());
  }, 1000);
  console.log("script end");
  */

  console.log("script start");
  const intervalId = setInterval(()=>{
    console.log(Math.random());
  }, 1000);

  setTimeout(()=>{
    clearInterval(intervalId);
  }, 5000);