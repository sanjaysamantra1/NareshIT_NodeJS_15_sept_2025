const express = require('express')
const fs = require('fs')
const app = express();
app.use(express.json()); // Middleware to parse JSON bodies


const fileLogger = (req, res, next) => {
    console.log(`File Logger Request Method: ${req.method}, Request URL: ${req.url}, Time: ${new Date().toISOString()}`);
    const logMessage = `Request Method: ${req.method}, Request URL: ${req.url}, Time: ${new Date().toISOString()}\n`;
    fs.appendFile('request_logs.txt', logMessage, (err) => {
        if (err) {
            console.error('Error writing to log file:', err);
        }
    });
    next();
}
const consoleLogger = (req, res, next) => {
    console.log(`Console Logger Request Method: ${req.method}, Request URL: ${req.url}, Time: ${new Date().toISOString()}`);
    next();
}
app.use(fileLogger, consoleLogger);

let employees = [
    { "eId": 101, "name": "sanjay", "sal": 5000, "gender": "male" },
    { "eId": 104, "name": "geeta", "sal": 8000, "gender": "female" },
    { "eId": 103, "name": "sameer", "sal": 7000, "gender": "male" },
    { "eId": 102, "name": "sita", "sal": 9000, "gender": "female" },
    { "eId": 105, "name": "deepak", "sal": 8000, "gender": "male" }
];
app.get("/employees", (req, res) => {
    res.json(employees);
});
app.get("/employees/:id", (req, res,next) => {
    const empId = parseInt(req.params.id);
    const employee = employees.find(emp => emp.eId === empId);
    if (employee) {
        res.json(employee);
    } else {
        try {
            throw new Error('Employee Not Found')
        } catch (err) {
            next(err)
        }
    }
});
app.post("/employees", (req, res) => {
    const newEmployee = req.body;
    employees.push(newEmployee);
    // res.status(201).json({data:newEmployee, message:'Employee added successfully'});
    res.sendStatus(201);
});
app.patch("/employees/:id", (req, res) => {
    const empId = parseInt(req.params.id);
    const employee = employees.find(emp => emp.eId === empId);
    if (employee) {
        Object.assign(employee, req.body);
        res.json(employee);
    } else {
        console.log('else...')
        // res.status(404).json({ message: "Employee not found" });

    }
});
app.delete("/employees/:id", (req, res) => {
    const empId = parseInt(req.params.id);
    const index = employees.findIndex(emp => emp.eId === empId);
    if (index !== -1) {
        employees.splice(index, 1);
        res.status(204).send();
    } else {
        res.status(404).json({ message: "Employee not found" });
    }
});

app.get('/ab?cd', (req, res) => {
    res.send('Response from regex route ab?cd');
});


let myErrorHandler = (err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || 'Something went wrong, Try again!';

    res.status(errorStatus).json({
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
        success: false,
    });
};
app.use(myErrorHandler)

app.listen(3000, () => {
    console.log("app started on port 3000");
});

/* 
    1. Get all employees
    2. Get employee by id
    3. Add new employee (Create)
    4. Update employee by id
    5. Delete employee by id
*/