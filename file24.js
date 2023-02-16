// arrow function

// conventional function -- multiple arguments
const sumThreeNumbers = function(a, b, c){
    return a + b + c;
}

// arrow function -- multiple arguments
const sumThreeNumbers2 = (a, b, c) => {
    return a + b + c;
};

console.log(sumThreeNumbers2(1,2,3));

// arrow function -- single argument
const even = num => num % 2 === 0;
console.log(even(5));

// arrow function -- single argument -- continued
const square = (num) => {
    return num * num
};
console.log(square(5));

// arrow function -- single argument -- continued
const square2 = num => num * num; // don't use return if it's a single line or there is no parenthesis
console.log(square2(5));

// arrow function
const firstChar = anyString => anyString[0];
console.log(firstChar("hello"));

// arrow function -- no arguments
const sayHello = () => "hello";
console.log(sayHello());

// arrow function -- no arguments -- continued
const sayHello2 = () => {
    return "hello";
};
console.log(sayHello2());

// without arrow function
function findTarget(array, target){
    for(let i = 0; i<array.length; i++){
        if(array[i]===target){
            return i;
        }
    }
    return -1;
}

// arrow function
const findTarget2 = (array, target) => {
    for(let i=0; i <array.length; i++){
        if(array[i]==target){
            return i;
        }
    }
    return -1;
};

const myArray = [1,3,8,90];
const ans = findTarget(myArray, 4);
console.log(ans);

const ans2= findTarget2(myArray, 4);
console.log(ans2);

const ans3= findTarget2(myArray, 8);
console.log(ans3);

const ans4= findTarget2(myArray, 8);
console.log(ans4);