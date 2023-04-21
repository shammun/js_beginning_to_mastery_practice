
// getters and setters

class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    // By using get
    // we can use fullName like property
    // now, we don't need to call it like function or use ()
    // person.fullName will give back the full name
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

    setName(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const person1 = new Person("harshit", "vashsith", 18);
// console.log(person1.fullName()); // will give error

console.log(person1.fullName); // will give the full name -- this is due to the get method

person1.fullName = "Motin Miah"; // this is due to the set method
console.log(person1);
console.log(person1.fullName);
console.log(person1.firstName);

person1.setName("Mridul", "Mahmud");
console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.fullName);