
const URL = "https://jsonplaceholder.typicode.com/posts";

// writing async before function makes it return a promise
async function getPosts(){
    // fetch(URL) returns a promise
    // we can use the term await before a promise to wait for it to resolve
    const response = await fetch(URL); 
    if(!response.ok){
        throw new Error("Something went wrong!");
    }
    // as json method also returns a promise, we can use await before it
    const data = await response.json();
    return data; // we are returning a promise here
}

getPosts()
.then(myData => {
    console.log(myData);
})
.catch(error=>{
    console.log("inside catch");
    console.log(error);
})
.catch(error=>{
    console.log("inside catch");
    console.log(error);
})


/*
const returned = getPosts();
console.log(returned);
*/

/*
fetch(URL)
.then(response => {
    return response.json();
})
.then(data => {
    console.log(data);
})
*/