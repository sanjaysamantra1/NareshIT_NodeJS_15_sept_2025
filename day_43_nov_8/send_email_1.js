const express = require('express')
const nodemailer = require('nodemailer')
const app = express();

app.get('/sendMail', (req, res) => {
    const transporter = nodemailer.createTransport({
        service:'gmail',
        auth: {
            user: "sanjaysamantra2@gmail.com",
            pass: "oiug hmtp wwiw csbq", // google app password
        },
    });
})

app.listen(3000, () => {
    console.log(`server runningt at 3000`)
})