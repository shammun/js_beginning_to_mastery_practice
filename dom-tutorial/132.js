
// understand callback function

// 1. callback function is a function that is passed 
// as an argument to another function

function myFunc(callback){
    console.log("Function is doing task 1");
    callback();
}

function myFunc2(){
    console.log("Function is doing task 2");
}

myFunc(myFunc2);                                       

myFunc(function(){
    console.log("function is doing task 2");
});

myFunc(()=> {
    console.log("Function inside is doing task 2");
})

/*
function getTwoNumbersAndAdd(number1, number2, callback){
    console.log(number1, number2);
    callback(number1, number2);
}

function addTwoNumbers(number1, number2){
    console.log(number1 + number2);
}

getTwoNumbersAndAdd(4, 5, addTwoNumbers);

*/

function getTwoNumbersAndAdd(number1, number2, onSuccess, onFailure){
    if(typeof number1 === "number" && typeof number2 === "number"){\
        onSuccess(number1, number2);
    } else{
        onFailure();
    }
}

function addTwoNumbers(number1, number2){
    console.log(num1 + num2);
}

function onFail(){
    console.log("Wrong data type");
    console.log("Please pass numbers only");
}

getTwoNumbersAndAdd(100, 37, addTwoNumbers, onFail);

/*
getTwoNumbersAndAdd("4", 67, (num1, num2)=>{
    console.log(num1 + num2);
    }, ()=>{
        console.log("Wrong data type");
        console.log("Please pass numbers only");
    }
);
*/