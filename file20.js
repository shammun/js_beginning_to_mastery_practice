// spread oeprator
// spread operator is used to split up array elements or object properties

const array1 = [1,2,3];
const array2 = [5,6,7];

const newArray = [...array1]; // copies array1 into newArray
console.log(newArray);

const newArray2 = [...array1, ...array2]; // copies array1 and array2 into newArray2
console.log(newArray2);

// spread operator -- continued
// for array2 we are not using spread operator
const newArray3 = [...array1, array2]; // copies values of array1 as elements and array2 as array into newArray3
console.log(newArray3);

// spread operator -- continued
const newArray4 = [...array1, ...array2, 78, 56];
console.log(newArray4);

// spread string
const newArray5 = [..."Hello World"];
console.log(newArray5);

// spread operator -- continued
// doesn't work for integers

// spread operator in objects
const person = {
    key1: "value1",
    key2: "value2"
};
console.log(person);

// just to make things clear that same key can't 
// be present more than one time in an object
const person2 = {
    key1: "value1",
    key2: "value2",
    key1: "LastkeyValue" // this will overwrite the previous key1
};
console.log(person2);

// spread operator in objects -- continued
const obj1 = {
    key1: "value1",
    key2: "value2"
};

const obj2 = {
    key3: "value3",
    key4: "value4"
};

const newObject = { ...obj1}; // copies obj1 into newObject
console.log(newObject);

// spread operator in objects -- continued
const newObject2 = { ...obj1, ...obj2}; // copies obj1 and obj2 into newObject2
console.log(newObject2);

// spread operator in objects -- continued
// suppose we are using spread operator to copy obj1 and obj2
// and they both have a same key. In this case,
// the value of the key in obj2 will overwrite the value of the key in obj1

const obj3 = {
    key1: "value1",
    key2: "value2"
};

const obj4 = {
    key1: "value3",
    key4: "value4",
    key5: "value5"
};

const newObject3 = {...obj3, ...obj4}; // copies obj3 and obj4 into newObject3
console.log(newObject3);

// spread operator in objects -- continued
// adding new key with spread operator
const newObject4 = {...obj3, ...obj4, key6: "value6"};
console.log(newObject4);

// spread operator in objects -- continued
// spread string will result into index as keys 
// and characters as values
const newObject5 = {..."Hello World"};
console.log(newObject5);

// spread operator in objects -- continued
// spread array will result into index as keys
// and elements as values
const newObjects = {...["item1", "item2"]};
console.log(newObjects);

// spread operator in objects -- continued
// spread string of characters
const newObjects2 = {..."abcdefghijklmnopqrstuvwxyz"};
console.log(newObjects2);