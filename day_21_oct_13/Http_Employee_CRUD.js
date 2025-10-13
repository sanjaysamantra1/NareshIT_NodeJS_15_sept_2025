const http = require('http');

let employees = [
    { "eId": 101, "name": "sanjay", "sal": 5000, "gender": "male" },
    { "eId": 104, "name": "geeta", "sal": 8000, "gender": "female" },
    { "eId": 103, "name": "sameer", "sal": 7000, "gender": "male" },
    { "eId": 102, "name": "sita", "sal": 9000, "gender": "female" },
    { "eId": 105, "name": "deepak", "sal": 8000, "gender": "male" }
];

const server = http.createServer((req, res) => {
    console.log(req.url)
    if(req.url==="/employees" && req.method==="GET"){
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(employees));
    } else if(req.url.match(/\/employees\/\d+/) && req.method==="GET"){
        const empId = parseInt(req.url.split("/")[2]);
        const employee = employees.find(emp => emp.eId === empId);
        if(employee){
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(employee));
        } else {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: "Employee not found" }));
        }
    } else if(req.url==="/employees" && req.method==="POST"){
        let body = "";
        req.on("data", chunk => {
            body += chunk.toString();
        });
        req.on("end", () => {
            const newEmployee = JSON.parse(body);
            employees.push(newEmployee);
            res.writeHead(201, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(newEmployee));
        });
    } else if(req.url.match(/\/employees\/\d+/) && req.method==="PATCH"){
        const empId = parseInt(req.url.split("/")[2]);
        let body = "";
        req.on("data", chunk => {
            body += chunk.toString();
        });
        req.on("end", () => {
            const updatedEmployee = JSON.parse(body);
            const index = employees.findIndex(emp => emp.eId === empId);
            if(index !== -1){
                employees[index] = { ...employees[index], ...updatedEmployee };
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(employees[index]));
            } else {
                res.writeHead(404, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ message: "Employee not found" }));
            }
        });
    } else if(req.url.match(/\/employees\/\d+/) && req.method==="DELETE"){
        const empId = parseInt(req.url.split("/")[2]);
        const index = employees.findIndex(emp => emp.eId === empId);
        if(index !== -1){
            employees.splice(index, 1);
            res.writeHead(204);
            res.end();
        } else {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: "Employee not found" }));
        }
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: "Route not found" }));
    }
});
server.listen(3000, () => {
    console.log("server started at port 3000");
});

/* 
    1. Get all employees
    2. Get employee by id
    3. Add new employee (Create)
    4. Update employee by id
    5. Delete employee by id
*/