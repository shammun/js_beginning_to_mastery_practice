// find

const myArray = ["Hello", "World", "I", "am", "a", "string", "array", "how", "are"];

function isLength3(string){
    return string.length === 3;
}

const ans = isLength3("dog");
console.log(ans);

const ans2 = myArray.find(isLength3);
console.log(ans2); // returns the first string with length 3, here "how"

const ans3 = myArray.find((string) => string.length === 3);
console.log(ans3);

const users = [
    {userId: 1, userName: "John"},
    {userId: 2, userName: "Jane"},
    {userId: 3, userName: "Jack"},
    {userId: 4, userName: "Jill"},
    {userId: 5, userName: "Joe"},
    {userId: 6, userName: "Jenny"}
];

const myUser = users.find((user)=>user.userId === 3);
console.log(myUser);