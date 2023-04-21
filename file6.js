let age = 8;
let drink = age >= 18 ? "coffee" : "juice";
console.log(drink);

let firstName = "John";
let weight = 62;
let height = 1.8;

if(firstName[0] === "J" && weight > 50 && height > 1.8){
    console.log("You are eligible to play");  
} else {
    console.log("You are not eligible to play");
}

// You are not eligible to play


// ternary operator
let firstName2 = "John";
let weight2 = 62;
let height2 = 1.8;

let message = firstName2[0] === "J" || weight2 > 50 || height2 > 1.8 ? "You are eligible to play" : "You are not eligible to play";
console.log(message); // You are eligible to play

// switch statement
let firstName3 = "John";
let weight3 = 62;
let height3 = 1.8;

switch(firstName3[0]){
    case "J":
        console.log("You are eligible to play");
        break;
    case "A":
        console.log("You are eligible to play");
        break;
    case "B":
        console.log("You are eligible to play");
        break;
    default:
        console.log("You are not eligible to play");
}

// You are eligible to play


// switch statement -- again
// switch statement -- multiple cases together
let firstName4 = "John";
let weight4 = 62;
let height4 = 1.8;

// groups multiple cases together
switch(firstName4[0]){
    case "J":
    case "A":
    case "B":
        console.log("You are eligible to play");
        break;
    default:
        console.log("You are not eligible to play");
}

// switch statement -- again
let firstName5 = "John";

switch(firstName5[0]){
    case "J":
    case "A":
    case "B":
        console.log("You are eligible to play");
        break;
    default:
        console.log("You are not eligible to play");
}



