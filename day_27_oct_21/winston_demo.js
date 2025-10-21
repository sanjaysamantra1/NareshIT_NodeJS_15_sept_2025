const express = require('express')
const winston = require('winston')
const app = express();
app.use(express.json());


// Configure Winston logger
const logger = winston.createLogger({
  level: 'info', // Log level: 'error', 'warn', 'info', 'http', 'verbose', 'debug', 'silly'
  format: winston.format.json(),
  transports: [
    new winston.transports.Console(), // Log to the console
    new winston.transports.File({ filename: 'app.log' }) // Log to a file
  ]
});

app.use((req, res, next) => {
  logger.info(`HTTP ${req.method} ${req.url}`);
  next();
});




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
app.get("/employees/:id", (req, res) => {
    const empId = parseInt(req.params.id);
    const employee = employees.find(emp => emp.eId === empId);
    if (employee) {
        res.json(employee);
    } else {
        res.status(404).json({ message: "Employee not found" });
    }
});
app.post("/employees", express.json(), (req, res) => {
    const newEmployee = req.body;
    employees.push(newEmployee);
    res.status(201).json(newEmployee);
});
app.patch("/employees/:id", express.json(), (req, res) => {
    const empId = parseInt(req.params.id);
    const employee = employees.find(emp => emp.eId === empId);
    if (employee) {
        Object.assign(employee, req.body);
        res.json(employee);
    } else {
        res.status(404).json({ message: "Employee not found" });
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