const users = require('../../data/users');
const express = require('express');
const userRouter = express.Router();

userRouter.get('/', (req, res) => {
    res.json(users);
});

userRouter.get('/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (user) {
        res.json(user);
    } else {
        res.sendStatus(404); // Not Found
    }
});   

userRouter.post('/', (req, res) => {
    const newUser = {
        id: users.length + 1,               
        name: req.body.name,
        email: req.body.email
    };
    users.push(newUser);
    res.status(201).json(newUser);
});
userRouter.put('/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (user) {
        user.name = req.body.name;
        user.email = req.body.email;
        res.json(user);
    } else {
        res.sendStatus(404); // Not Found
    }
});
userRouter.delete('/:id', (req, res) => {
    const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));                                                   
    if (userIndex !== -1) {
        users.splice(userIndex, 1);
        res.sendStatus(204); // No Content
    } else {
        res.sendStatus(404); // Not Found
    }
});

module.exports = userRouter;