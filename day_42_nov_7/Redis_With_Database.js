import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { createClient } from 'redis';
import { employeeModel } from './employee_model.js';

const app = express();
app.use(express.json());
app.use(cors());

async function connectDatabase() {
    await mongoose.connect(`mongodb://127.0.0.1:27017/nareshit_sept_2025`)
    console.log('Database connected!!!')
}

const redisClient = await createClient()
    .on('error', err => console.log('error connecting redis'))
    .connect();

async function getFromCache(key) {
    const cachedData = await redisClient.get(key);
    return cachedData ? JSON.parse(cachedData) : null;
}
async function setInCache(key, value, expiryTime = 300) {
    await redisClient.set(key, JSON.stringify(value), { EX: expiryTime });
}

app.get('/employees', async (req, res) => {
    const key = 'allEmployees'
    try {
        const employeesDataFromRedis = await getFromCache(key);
        if (employeesDataFromRedis) {
            res.json({source:'REDIS',employeesDataFromRedis})
        } else {
            const employeesDataFromDB = await employeeModel.find();
            await setInCache(key, employeesDataFromDB);
            res.json({source:'DataBase',employeesDataFromDB})
        }
    } catch (err) {
        console.log(err)
    }
});
app.get('/employees/:id', async (req, res) => {
    const key = `employees/${req.params.id}`
    try {
        const employeeDataFromRedis = await getFromCache(key);
        if (employeeDataFromRedis) {
            res.json({source:'REDIS',employeeDataFromRedis})
        } else {
            const employeeDataFromDB = await employeeModel.findOne({ eId: req.params.id });
            await setInCache(key, employeeDataFromDB);
            res.json({source:'DataBase',employeeDataFromDB})
        }
    } catch (err) {
        console.log(err)
    }
});

app.listen(3000, async() => {
    await connectDatabase();
    console.log('express server started')
})