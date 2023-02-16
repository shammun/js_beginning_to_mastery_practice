// param destructuring

const person = {
    firstName: "John",
    gender: "male"
};

function printDetails(obj){
    console.log(obj.firstName);
    console.log(obj.gender)
}

printDetails(person);

// we can use destructuring to make the code more concise
function printDetails2({firstName, gender}){
    console.log(firstName);
    console.log(gender);
}

printDetails2(person);