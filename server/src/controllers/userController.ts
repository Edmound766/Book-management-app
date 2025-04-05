// src/controllers/userController.ts
import { Request, Response } from 'express';
import {registerSchema} from "../schemas/userSchema";
type User= {
    id: number
    name: string
    email: string
    age: number
}

const users:User[] = [
    {
        id: 1,
        name: "Alice",
        email: "alice@example.com",
        age: 28
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@example.com",
        age: 34
    },
    {
        id: 3,
        name: "Charlie",
        email: "charlie@example.com",
        age: 22
    },
    {
        id: 4,
        name: "Diana",
        email: "diana@example.com",
        age: 30
    },{
        id: 5,
        name: "Diana",
        email: "diana@example.com",
        age: 30
    }
];

export const createUser = (req: Request, res: Response) => {
    try {
        const validatedUser = registerSchema.safeParse(req.body); // Validate incoming data
        // Proceed with creating the user using validatedUser
        if (!validatedUser.success) throw new Error(JSON.stringify(validatedUser.error.errors));
        res.status(201).json(validatedUser.data);
    } catch (error) {
        if (error instanceof Error && error.message) {
             res.status(400).json({ errors: JSON.parse(error.message) });
        }

        // Handle unexpected errors
        res.status(500).json({ error: 'An unexpected error occurred.' });
    }
};

export const getAllUsers = async (req: Request, res: Response) => {
    res.status(200).json(users);
}
