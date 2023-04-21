

// closures

// function can return a function

function printFullName(firstName, lastName){
    function printName(){
        console.log(firstName, lastName);
    }
    return printName;
}

const ans = printFullName("John", "Doe");
ans();