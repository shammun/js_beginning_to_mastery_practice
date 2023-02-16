
// static method and properties

// they are related to class

// static methods and properties are not related to the object

class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    static classInfo(){
        return "This is a class for Person";
    }

    static desc = "static properties";

    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(fullName){
        const [firstName, secondName] = fullName.split(" ");
        this.firstName = firstName;
        this.lastName = secondName;
    }
}

const person1 = new Person("harshit", "vashsith", 18);
const info = Person.classInfo();
console.log(info);