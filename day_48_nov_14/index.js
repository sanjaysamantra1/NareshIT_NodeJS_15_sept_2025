import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { employeeRouter } from "./src/routes/employee_routes.js";


export const app = express();
// middlewares
app.use(express.json());
app.use(cors());

async function connectToDB() {
    await mongoose.connect('mongodb://127.0.0.1/nareshit_sept_2025');
    console.log('Database connection established')
}
app.use('/employees', employeeRouter)
app.listen(3000, async () => {
    await connectToDB();
    console.log('app running at 3000')
});

