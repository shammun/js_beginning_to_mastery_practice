
// lexical environment, scope chain

const lastName = "Doe";

const printName = function(){
    const firstName = "John";

    console.log(firstName);
    console.log(lastName);
}
printName();