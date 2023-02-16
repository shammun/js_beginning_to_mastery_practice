const fruits = ["apple", "orange", "banana"];

// print all the fruits separately
for(let fruit of fruits) {
    console.log(fruit);
}

// prints all the fruits in upper case
let i=0;
while(i<fruits.length) {
    console.log(fruits[i].toUpperCase());
    i++;
}

