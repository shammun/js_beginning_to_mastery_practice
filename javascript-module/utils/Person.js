export class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    info(){
        console.log(this.firstName, this.lastName, this.age)
    }
}

export class Person2{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = `${firstName} ${lastName}`;
        this.age = age;
    }

    info(){
        console.log(this.fullName, this.age)
    }
}

export class Person3{
    constructor(firstName, lastName, age, salary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = `${firstName} ${lastName}`;
        this.age = age;
        this.salary = salary
    }

    info(){
        console.log(this.fullName, this.age, this.salary)
    }
}

const hello = "Hello World";
export default hello;