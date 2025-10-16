const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
app.use(cookieParser()); // middleware

app.get('/setCookies', (req, res) => {
    res.cookie('name', 'Virat Kohli')
    res.cookie('age', 40)
    res.cookie('add', 'Delhi')
    res.send('Cookie are added succesfully!!!')
})
app.get('/getCookies', (req, res) => {
    console.log(req.cookies);
    res.send(req.cookies)
})
app.get('/deleteCookies', (req, res) => {
    res.clearCookie('name', 'Virat Kohli')
    res.clearCookie('age', 40)
    res.send('2 Cookie are deleted succesfully!!!')
})

app.listen(3000);