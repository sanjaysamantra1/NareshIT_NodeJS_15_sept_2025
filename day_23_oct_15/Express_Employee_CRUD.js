const express = require('express')
const fs = require('fs')
const server = express();
server.use(express.json()); // Middleware to parse JSON bodies


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
server.use(fileLogger, consoleLogger);

let employees = [
    { "eId": 101, "name": "sanjay", "sal": 5000, "gender": "male" },
    { "eId": 104, "name": "geeta", "sal": 8000, "gender": "female" },
    { "eId": 103, "name": "sameer", "sal": 7000, "gender": "male" },
    { "eId": 102, "name": "sita", "sal": 9000, "gender": "female" },
    { "eId": 105, "name": "deepak", "sal": 8000, "gender": "male" }
];
server.get("/employees", (req, res) => {
    res.json(employees);
});
server.get("/employees/:id", (req, res) => {
    const empId = parseInt(req.params.id);
    const employee = employees.find(emp => emp.eId === empId);
    if (employee) {
        res.json(employee);
    } else {
        res.sendStatus(204)
    }
});
server.post("/employees", (req, res) => {
    const newEmployee = req.body;
    employees.push(newEmployee);
    // res.status(201).json({data:newEmployee, message:'Employee added successfully'});
    res.sendStatus(201);
});
server.patch("/employees/:id", (req, res) => {
    const empId = parseInt(req.params.id);
    const employee = employees.find(emp => emp.eId === empId);
    if (employee) {
        Object.assign(employee, req.body);
        res.json(employee);
    } else {
        res.status(404).json({ message: "Employee not found" });
    }
});
server.delete("/employees/:id", (req, res) => {
    const empId = parseInt(req.params.id);
    const index = employees.findIndex(emp => emp.eId === empId);
    if (index !== -1) {
        employees.splice(index, 1);
        res.status(204).send();
    } else {
        res.status(404).json({ message: "Employee not found" });
    }
});

server.get('/ab?cd', (req, res) => {
    res.send('Response from regex route ab?cd');
});
server.listen(3000, () => {
    console.log("Server started on port 3000");
});

/* 
    1. Get all employees
    2. Get employee by id
    3. Add new employee (Create)
    4. Update employee by id
    5. Delete employee by id
*/