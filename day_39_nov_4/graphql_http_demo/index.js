const express = require('express')
const cors = require('cors')
const { createHandler } = require('graphql-http/lib/use/express');
const { ruruHTML } = require('ruru/server');
const employeeSchema = require('./models/Employee_Schema')
const app = express();

// middlewares
app.use(express.json())
app.use(cors())

app.all('/api/employees', createHandler({ employeeSchema }));

// serve RURU UI
app.get('/', (req, res) => {
    res.end(ruruHTML({ endpoint: '/api/employees' }))
})

app.listen(3000, () => {
    console.log("app started on port 3000");
});

