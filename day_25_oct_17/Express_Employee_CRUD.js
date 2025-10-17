const express = require('express')
const app = express();
const { query, validationResult,body} = require('express-validator'); // middleware
app.use(express.json()); // Middleware to parse JSON bodies

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
app.get("/employees/:id", (req, res, next) => {
    const empId = parseInt(req.params.id);
    const employee = employees.find(emp => emp.eId === empId);
    if (employee) {
        res.json(employee);
    } else {
        res.send('Not Found');
    }
});
app.get("/employeeByName", query('name').notEmpty(), (req, res, next) => {
    const result = validationResult(req);
    if (result.isEmpty()) { // no errors - isEmpty - true
        const empName = req.query.name;
        const employee = employees.find(emp => emp.name === empName);
        if (employee) {
            res.json(employee);
        } else {
            res.send('Employee Not Found');
        }
    }else{
        res.send({ errors: result.array() });
    }
});

createEmpoyeeValidator = [
    body('eId')
        .trim()
        .notEmpty()
        .withMessage('EId is a Required field')
        .isNumeric()
        .withMessage('eId should be a number'),
    body('name')
        .trim()
        .notEmpty()
        .withMessage('name is a Required field')
        .isString()
        .withMessage('name should be a string')
        .isLength({min:5})
        .withMessage('Name should be minimum 5 chars'),
    body('sal')
        .trim()
        .notEmpty()
        .withMessage('sal is a Required field')
        .isNumeric()
        .withMessage('sal should be a number')

]
app.post("/employees", createEmpoyeeValidator , (req, res) => {
    const errors = validationResult(req);
    if(errors.isEmpty()){
        const newEmployee = req.body;
        employees.push(newEmployee);
        res.sendStatus(201);
    }else{
        res.send(errors)
    }
});
app.patch("/employees/:id", (req, res) => {
    const empId = parseInt(req.params.id);
    const employee = employees.find(emp => emp.eId === empId);
    if (employee) {
        Object.assign(employee, req.body);
        res.json(employee);
    } else {
        console.log('else...')
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