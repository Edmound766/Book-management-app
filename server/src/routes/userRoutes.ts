import {Router} from "express";
import {createUser, getAllUsers} from "../controllers/userController";

const userRouter = Router();


userRouter.get("/", getAllUsers)
userRouter.post("/create", createUser)



export default  userRouter; // Change 'UserRouter' to whatever name you prefer