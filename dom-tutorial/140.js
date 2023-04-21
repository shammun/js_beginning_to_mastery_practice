
const URL = "https://jsonplaceholder.typicode.com/posts";
const xhr = new XMLHttpRequest();
// console.log(xhr);
// console.log(xhr.readyState);
// console.log(xhr.readyState); // 0
xhr.open("GET", URL); // browser will do this asynchronously
// console.log(xhr.readyState); // 1

/*
xhr.onreadystatechange = function(){
    // console.log(xhr.readyState);
    if(xhr.readyState === 4){
        // console.log(xhr.response);
        // console.log(typeof xhr.response);
        console.log(xhr.status); // gives 200
        const response = xhr.response;
        const data = JSON.parse(response); // converts to JS object
        console.log(typeof data); // object
    }
}
*/

// Instead of the above code, we can use the below code
// which runs only when the readyState is 4

xhr.onload = function(){
    const response =  xhr.response;
    const data = JSON.parse(response);
    console.log(data);
}

xhr.send();

// console.log(xhr.onreadystatechange);
