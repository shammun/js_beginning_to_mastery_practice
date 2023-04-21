
/*
function myFunction5(power){
    return function(number){
        return number ** power;
    }
}
*/

// Equivalent code using arrow function

const myFunction5 = power => number => number ** power;

const square5 = myFunction5(2);
const ans5_1 = square5(3);
console.log(ans5_1);

const cube5 = myFunction5(3);
const ans5 = cube5(2);
console.log(ans5);