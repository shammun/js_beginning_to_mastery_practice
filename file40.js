// fill method
// fills an array with a static value from a start index to an end index

const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
myArray.fill(0, 2, 5); // fill with 0 from index 2 to index 4
console.log(myArray);

const myArray2 = new Array(10).fill(0); // fill with 0 from index 0 to index 9
console.log(myArray2);

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