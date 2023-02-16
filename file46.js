// optional chaining

const user = {
    firstName: "John",
    address: {houseNumber: '1234'}
};

console.log(user.firstName);
console.log(user.address.houseNumber);

const user2 = {
    firstName: "John",
    // address: {houseNumber: '1234'}
};

console.log(user2.firstName);
console.log(user2.address); // returns undefined
//console.log(user2.address.houseNumber); // returns error as can't read property of undefined

// But there is a to avoid this error
// we can use optional chaining

// we want to retun undefined and not error if a property is not there
console.log(user2?.firstName);
// Does user exist? if yes then return firstName

console.log(user2?.addres?.houseNumber);
// Does user exist? if yes then return address. 
// Does address exist? if yes then return houseNumber