const express = require('express')
const fileUpload = require('express-fileupload')
const app = express();

app.use(fileUpload());

app.post('/upload', (req, res) => {
    let sampleFile;
    let uploadPath;

    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files uploaded')
    }
    sampleFile = req.files.sampleFile;
    uploadPath = `${__dirname}/assets/${sampleFile.name}`;

    // use mv() to place the file
    sampleFile.mv(uploadPath, function (err) {
        if (err) {
            return res.status(500).send(err);
        }
        res.send(`${sampleFile.name} Uploaded Succesfully!!!`)
    })
});

app.listen(3000, () => {
    console.log(`server runningt at 3000`)
})