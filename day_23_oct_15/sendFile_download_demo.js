const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send(
        `
        <p>Click the below 2 links to see the difference Between sendFile and download</p>
        <a href="/sendFileDemo">Send File Demo</a><br>
        <a href="/downloadDemo">Download File Demo</a>
        `
    );
});
app.get('/sendFileDemo', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../assets/nodejs_img.jpeg'));
});

app.get('/downloadDemo', (req, res) => {
    res.download(path.resolve(__dirname, '../assets/nodejs_img.jpeg'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
