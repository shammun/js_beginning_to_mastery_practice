
// lexical environment, scope chain

const lastName = "Doe";

const printName = function(){
    const firstName = "John";

    function myFunction(){
        console.log(firstName);
        console.log(lastName);
    }
    myFunction();
}
printName();