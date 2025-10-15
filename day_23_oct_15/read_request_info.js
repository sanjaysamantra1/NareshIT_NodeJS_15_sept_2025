const express = require('express');
const app = express();
const PORT = 3000;
app.use(express.json());

app.post('/data', (req, res) => {
    const { method, ip, body } = req;
    console.log(`Method: ${method}, IP: ${ip}, Body:`, body);
    res.json({ method, ip, body });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
