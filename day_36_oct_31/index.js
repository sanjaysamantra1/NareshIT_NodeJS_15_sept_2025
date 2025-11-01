const express = require('express')
const cors = require('cors')
const employeeRouter = require('./routes/employee_route');
const productRouter = require('./routes/product_route');
const {connectDB} = require('./utils/db_utils');
const authRouter = require('./routes/auth_route');
const app = express();

// middlewares
app.use(express.json())
app.use(cors())

// use the routers
app.use('/employees', employeeRouter);
app.use('/products', productRouter);
app.use('/auth', authRouter);

app.listen(3000, async() => {
    await connectDB()
    console.log("app started on port 3000");
});

