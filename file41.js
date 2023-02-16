const myArray = ["value1", "value2", "value3", "value4"];

// delete item 2
myArray.splice(1,1); // starting from index 1, delete 1 item
console.log(myArray);

const deletedItem = myArray.splice(1,1); // starting from index 1, delete 1 item
console.log(deletedItem);

console.log(myArray);

// insert
myArray.splice(1, 0, "inserted item"); // insert at index 1, no delete as 0 is passed, and the item to be inserted
console.log(myArray);

// insert and delete at the same time
// will delete two items from index 1 and then add two elements
myArray.splice(1, 2, "new inserted item1", "new inserted item4");
console.log(myArray);

// I can also store the deleted items when using splice
const deletedItems2 = myArray.splice(1, 2, "new inserted item5", "new inserted item6");
console.log(deletedItems2);

console.log(myArray);