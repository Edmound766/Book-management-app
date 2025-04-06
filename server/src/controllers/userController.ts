// src/controllers/userController.ts
import { Request, Response } from 'express';
import {registerSchema} from "../schemas/userSchema";
import {getUsers} from "../actions/user"

export const createUser =async (req: Request, res: Response) => {

};

export const getAllUsers = async (req: Request, res: Response) => {
    const users = await getUsers()
    res.status(200).json(users);
}
