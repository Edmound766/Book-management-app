import { Person } from '../src/types'; // Adjust the import path accordingly

describe('Person Class', () => {
    it('should create a person with valid properties', () => {
        const person = new Person(1, 'Alice', 'alice@example.com', 28);
        expect(person.id).toBe(1);
        expect(person.name).toBe('Alice');
        expect(person.email).toBe('alice@example.com');
        expect(person.age).toBe(28);
    });

    it('should throw an error when age is less than or equal to 0', () => {
        expect(() => new Person(2, 'Bob', 'bob@example.com', 0)).toThrow('Age must be greater than 0');
        expect(() => new Person(3, 'Charlie', 'charlie@example.com', -5)).toThrow('Age must be greater than 0');
    });

    it('should allow updating age to a valid value', () => {
        const person = new Person(4, 'Diana', 'diana@example.com', 30);
        person.age = 35; // Valid age
        expect(person.age).toBe(35);
    });

    it('should throw an error when updating age to an invalid value', () => {
        const person = new Person(5, 'Eve', 'eve@example.com', 25);
        expect(() => {
            person.age = -1; // Invalid age
        }).toThrow('Age must be greater than 0');
    });

    it('should greet correctly', () => {
        const person = new Person(6, 'Frank', 'frank@example.com', 40);
        console.log = jest.fn(); // Mock console.log
        person.sayHello();
        expect(console.log).toHaveBeenCalledWith('Frank says hello!');
    });
});
