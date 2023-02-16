// objects inside arrays

const users = [
    {userId: 1, name: 'John', age: 25},
    {userId: 2, name: 'Mary', age: 30},
    {userId: 3, name: 'Peter', age: 28}
];

for(let user of users){
    console.log(user.name);
}

// nested destructuring
const users2 = [
    {"userId": 1, "name": "John", "age": 25, "address": {"city": "New York", "state": "NY"}},
    {"userId": 2, "name": "Mary", "age": 30, "address": {"city": "Boston", "state": "MA"}},
    {"userId": 3, "name": "Peter", "age": 28, "address": {"city": "Chicago", "state": "IL"}}
];

const [Myuser1, Myuser2, Myuser3] = users2;
console.log(Myuser2)

// but suppose, we need only the name of user1 and age of user3
// we can use nested destructuring
const [{name}, , {age}] = users2;
console.log(name);
console.log(age);

// we can also change the name of the variables
const [{name: myName}, , {age: myAge}] = users2;
console.log(myName);
console.log(myAge);

// suppose, we need the userId and name of user1 and age of user 3
const [{name: myName2, userId}, , {age:myAge2}] = users2;
console.log(myName2);
console.log(userId);
console.log(myAge2);

