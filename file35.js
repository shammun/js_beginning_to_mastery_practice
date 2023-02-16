// filter method

const numbers = [1,3,2,4,5,6,7];

const evenNumbers = numbers.filter((number)=>{
    return number%2 === 0;
});
console.log(evenNumbers);

const isEven = function(number){
    return number%2 === 0;
}
console.log(numbers.filter(isEven));