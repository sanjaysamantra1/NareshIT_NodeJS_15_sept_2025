const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

app.post('/employees', (req, res) => {
    console.log('this is post call');
    console.log(req.body);
})

app.listen(3000);