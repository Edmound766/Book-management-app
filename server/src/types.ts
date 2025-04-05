interface User {
    readonly id: number;
    name: string;
    email: string;
    age: number;
    sayHello: (name: string) => void;
}

export class Person implements User {
    readonly id: number;
    name: string;
    email: string;
    private _age: number=1; // Use a private property for age

    constructor(id: number, name: string, email: string, age: number) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.age = age; // Use the setter to validate age
    }

    // Getter for age
    get age(): number {
        return this._age;
    }

    // Setter for age with validation
    set age(value: number) {
        if (value <= 0) {
            throw new Error('Age must be greater than 0');
        }
        this._age = value;
    }

    sayHello(): void {
        console.log(`${this.name} says hello!`);
    }
}