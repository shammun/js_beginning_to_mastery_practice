// lexical scoping
function myApp(){
    const myVar = "value1";
    function myFunc(){
        const myVar = "value 60";
        // but if we comment out the above line, then the value of myVar will be "value1"
        console.log("inside myFunc", myVar);
    };
    const myFunc2 = function(){};
    const myFunc3 = () => {};
    console.log(myVar);
    myFunc();
}

myApp();

// lexical scoping
const myVar = "value 1";

function myApp2(){
    
    function myFunc(){
        console.log("inside myFunc", myVar); // the value of myVar will be "value 1"
    };
    const myFunc2 = function(){};
    const myFunc3 = () => {};
    console.log(myVar);
    myFunc();
}

myApp2();

// lexical scoping
const myVar2 = "value 2";

function myApp3(){
    
    function myFunc(){
        const myFunc2 = () => {
            console.log("inside myFunc", myVar2); // the value of myVar will be "value 2"
        };
        myFunc2();
    };

    console.log(myVar);
    myFunc();
}

myApp3();