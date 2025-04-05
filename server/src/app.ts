import express from 'express'
import userRouter from "./routes/userRoutes";
import path from 'path';

export const app = express()
const PORT = process.env.PORT || 5000;


app.use(express.json());
app.use("/api/users",userRouter)
app.use("/",express.static(path.resolve(__dirname, "./static")));


app.listen(PORT, () => {
    const protocol = app.get('trust proxy') ? 'https' : 'http'; // Determine protocol based on trust proxy setting
    const host = `localhost:${PORT}`; // Default to localhost for local development
    const fullUrl = `${protocol}://${host}`;

    console.log(`Server is running at ${fullUrl}`);
});