
// getters and setters

class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    // By using get
    // we can use fullName like property
    // we can call this later without ()
    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }

    // By using set, we can set the value of 
    // the property
    // now we can call this like property
    // we can call this later without ()
    set fullName(fullName){
        const [firstName, secondName] = fullName.split(" ");
        this.firstName = firstName;
        this.lastName = secondName;
    }
}

const person1 = new Person("harshit", "vashsith", 18);
// console.log(person1.fullName()); // will give error

console.log(person1.fullName); // will give the full name

person1.fullName = "Motin Miah";
console.log(person1);
console.log(person1.fullName);
console.log(person1.firstName);
// we can call thi