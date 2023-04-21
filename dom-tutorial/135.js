
// function returning promise

function friedRicePromise(){
    const bucket = ['coffee', 'chips', 'vegetables', 'salt', 'rice'];
    return new Promise((resolve, reject) => {
        if (bucket.includes("vegetables") && bucket.includes("rice") && bucket.includes("salt") && bucket.includes("chips") && bucket.includes("coffee")){
            resolve({value: "Fried Rice"});
        } else{
            reject("Not enough ingredients");
        }
    })
}

friedRicePromise().then((myFriedRice)=>{
    console.log("let's eat ", myFriedRice);
}).catch((error)=>{
    console.log(error);
});