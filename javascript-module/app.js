// we want to import firstName from fname.js and age from age.js

import {firstName} from './utils/fname.js';
import {age} from './utils/age.js';
// import Person from './utils/Person.js';
// import { Person2 } from './utils/Person.js';
import something, {Person, Person2, Person3} from './utils/Person.js';

console.log(firstName, age);

const person = new Person("John", "Doe", 31);
person.info();
console.log(person);

const person2 = new Person2("Milon", "Shah", 21);
person2.info();
console.log(person2);

const person3 = new Person3("Milon", "Shah", 21, 30000);
person3.info();
console.log(person3);

console.log(something);