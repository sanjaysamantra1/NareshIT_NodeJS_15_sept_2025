const express = require('express');
const app = express();

app.get('/users', (req, res) => {
    console.log('GET request for users')
    res.end("GET request for users");
});
app.use('/employees', (req, res) => {
    console.log('USE request for employees');
    res.send("USE request for employees");
});

app.listen(5000, () => {
    console.log("server started at port 5000");
});