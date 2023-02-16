// set

const numbers = new Set([1,2,3,3]);
console.log(numbers);

// no index-based access
// no duplicates
// no order

// add
numbers.add(55);
console.log(numbers);

// delete
numbers.delete(2);
console.log(numbers);

// has
console.log(numbers.has(3));

// clear
numbers.clear();
console.log(numbers);

// size
console.log(numbers.size);

const numbers2 = new Set([1,2,3,4,5,6,7,8,9,10]);
// forEach
numbers2.forEach((value, key) => {
    console.log(key, value);
})

// convert to array
const numbersArray = Array.from(numbers2);
console.log(numbersArray);

// convert to array
const numbersArray2 = [...numbers2];
console.log(numbersArray2);

// convert to array
const numbersArray3 = [...new Set([1,2,3,3,4,5,6,7,8,9,10])];
console.log(numbersArray3);

// convert to array
const numbersArray4 = Array.from(new Set([1,2,3,3,4,5,6,7,8,9,10]));
console.log(numbersArray4);
