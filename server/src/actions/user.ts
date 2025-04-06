import prisma from "../lib/prisma";
import {registerSchema} from "../schemas/userSchema";
import {z} from "zod";

export  async function createNewUser(newUser: z.infer<typeof registerSchema>) {
        const validatedUser = registerSchema.safeParse(newUser); // Validate incoming data
        // Proceed with creating the user using validatedUser
        if (!validatedUser.success) throw new Error(JSON.stringify(validatedUser.error.errors));
        const user= validatedUser.data
        const checkUser = await prisma.user.findUnique({
            where:{
                email:user.email
            }
        })
        return user;

}

export  async function getUsers(){
    return prisma.user.findMany({
        select: {
            username: true,
            email: true,
            age: true
        }
    });
}
