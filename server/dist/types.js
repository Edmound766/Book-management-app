"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
class Person {
    id;
    name;
    email;
    _age = 1; // Use a private property for age
    constructor(id, name, email, age) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.age = age; // Use the setter to validate age
    }
    // Getter for age
    get age() {
        return this._age;
    }
    // Setter for age with validation
    set age(value) {
        if (value <= 0) {
            throw new Error('Age must be greater than 0');
        }
        this._age = value;
    }
    sayHello() {
        console.log(`${this.name} says hello!`);
    }
}
exports.Person = Person;
