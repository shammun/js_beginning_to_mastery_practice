// functions inside a function

function app(){
    const myFunc = () => {
        console.log("Hello from myFunc");
    };

    const addTwoNumbers = (a, b) => {
        return a + b;
    };

    const mul = (num1, num2) => num1*num2;

    console.log("inside app");

    myFunc();
    console.log(addTwoNumbers(2, 3));
    console.log(mul(5, 6));
}
app();