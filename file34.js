// map

const numbers = [3,4,5,6,7,8,9,10];

const square = function(number){
    return number*2;
}
console.log(numbers.map(square));

const square2 = function(number){
    console.log(number*2);
}
numbers.forEach(square2)

const squareNumber = numbers.map(square); // returns an array
//console.log(squareNumber);

const squareNumber2 = numbers.map((number)=>{
    return number*2;
}); // returns an array

const users = [
    { name: "John", age: 30, city: "New York" },
    { name: "Jane", age: 25, city: "Boston" },
    { name: "Jack", age: 40, city: "Miami" },
    { name: "Jill", age: 35, city: "Los Angeles" },
    { name: "Joe", age: 20, city: "Chicago" }
]

const userNames = users.map((user)=>{
    return user.name;
});
console.log(userNames);