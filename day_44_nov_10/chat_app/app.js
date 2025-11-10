const express = require('express');
const { createServer } = require('node:http');
const socketIO = require('socket.io');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, 'public')));
const server = createServer(app);
const io = socketIO(server);

io.on('connection', (socket) => {
    console.log('A New Client Joined...');
    socket.on('setName', (name) => {
        socket.userName = name;
    })
    socket.on('chat', (data) => {
        const msgData = { message: data.message, userName: socket.userName, time: new Date().toLocaleTimeString() }
        io.emit('chat', msgData);
    })
})

server.listen(3000, () => {
    console.log('server running at http://localhost:3000');
});