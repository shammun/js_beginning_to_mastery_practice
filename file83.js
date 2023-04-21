
// closures

// function can return a function

function outerFunction(){
    function innerFunction(){
        console.log("innerFunction");
    }
    return innerFunction;
}

const ans = outerFunction();
ans();