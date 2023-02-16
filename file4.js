let firstName;
console.log(typeof firstName);
firstName = "John";
console.log(typeof firstName, firstName);

let myVariable = null;
console.log(myVariable);
myVariable = "ss";
console.log(myVariable, typeof myVariable);
console.log(typeof null); // this is bug or error as it shows object

// BigInt
let bigInt = 1234567890123456789012345678901234567890n;
console.log(bigInt, typeof bigInt);

// BigInt -- again
let number = BigInt(123456);
console.log(number, typeof number);

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);


// BigInt -- again
let number2 = 123n;
console.log(number2, typeof number2);

console.log(number + number2);

// We can't add BigInt with normal number
// console.log(number + 123);


