const express = require('express');
const fs = require('fs');
const { formidable } = require('formidable');
const app = express();

app.get('/', (req, res) => {
    res.send(`
            <h2>Formidable to upload files</h2>
            <form action="/upload" method="POST" encType="multipart/form-data">
                <p>Text Field: <input name='title' /></p>
                <p>Files: <input type='file' name='myFiles' multiple /></p>
                <input type="submit" value="Upload!">
            </form>    
        `);
});
app.post('/upload', async (req, res) => {
    const options = {
        uploadDir: `${__dirname}/assets`,
        maxFileSize: 1024 * 5, // max 5 kb
        filter: function ({ mimetype }) {
            return mimetype && mimetype.includes('image');
        }
    };
    const formidableObj = formidable(options);

    try {
        const [fields, files] = await formidableObj.parse(req);
        for (let fileObj of files.myFiles) {
            let oldPath = fileObj.filepath;
            let newPath = `${__dirname}/assets/${fileObj.originalFilename}`;
            let imageFile = fs.readFileSync(oldPath);
            fs.writeFileSync(newPath, imageFile);
        }
        res.send('Files Uploaded!!!');
    } catch (err) {
        res.send('plz upload only image files with size <= 5kb');
    }
});

app.listen(3000, () => {
    console.log('server runningt at 3000');
});