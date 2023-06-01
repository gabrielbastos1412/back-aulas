import express, { Request, Response } from "express";
import dotenv from "dotenv";
import validateEnv from "./utils/validateEnv";

dotenv.config();
console.log(process.env.PORT)
validateEnv();


const app = express();
const PORT = process.env.PORT || 3333;


app.get("/", (req: Request, res: Response) => {
 res.send("Hello world!");
});
app.listen(PORT, () => {
 console.log(`Express app iniciada na porta ${PORT}.`);
});