const express = require('express');
const app = express(); // creating a server
const PORT = 3000;
const userRouter = require('./userRoutes');
const productRouter = require('./productRoutes');

// Middleware to parse JSON bodies
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to the Express Router Example!');
});

app.use('/users', userRouter);
app.use('/products', productRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
