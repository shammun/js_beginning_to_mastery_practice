// callback function

function myFunc(a){
    console.log(a);
    console.log("hello world!");
}
myFunc([1,2,3]);
myFunc("abc");

function myFunc2(){
    console.log("Inside myFunc2()");
}

function myFunc3(a){
    console.log(a);
}

myFunc3(myFunc2); // returns the function myFunc2() itself

// we can pass a function as a parameter to another function
function myFunc4(a){
    // console.log(a);
    console.log("Inside myFunc4()");
    a();
}

myFunc4(myFunc2); // callback function

// we can pass a function as a parameter to another function -- another
function myFunc5(callback){
    callback();
}

function myFuncTest(name){
    console.log("inside my func test");
    console.log(`Your name is ${name}`);
}

myFunc5(myFuncTest);
myFunc5(myFuncTest("John"));
