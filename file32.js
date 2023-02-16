// function returning function

function myFunc(){
    function hello(){
        console.log("Hello world!");
    }
    return hello;
}

const ans = myFunc();
ans()
// console.log(ans()); //gives undefined

// function returning function -- another example
function myFunc2(){
    return function(){
        return "Hello world!";
    };
}

const ans2 = myFunc2();
console.log(ans2()); // returns "Hello world!"