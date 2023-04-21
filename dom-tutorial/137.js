

// Promise.resolve
// Promise chaining

// const myPromise = Promise.resolve(5);
// Promise.resolve(5).then(value=>{
//   console.log(value);
// })


// then()
// then method always return promise

function myPromise(){
    return new Promise((resolve, reject)=>{
        resolve("foo");
    })
}

myPromise()
.then((value)=>{
    console.log(value);
    value+="bar";
    return value;
})
.then((value)=>{
    console.log(value);
    value += "baaz";
    return value;
})
.then((value)=>{
    console.log(value);
})






