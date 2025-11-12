const express = require("express");
const socket = require("socket.io");

// App setup
const PORT = 5000;
const app = express();
const server = app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});

// Static files
app.use(express.static("public"));

// Socket setup
const io = socket(server);

const activeUsers = new Set();
const activeUsersObj = {}



io.on("connection", function (socket) {
  console.log("Made socket connection", socket);
  // socket = {a:10,b:20,userId:rahman}
  socket.on("new user", function (data) {
    socket.userId = data;
    activeUsers.add(data);
    activeUsersObj[data] = socket;
    io.emit("new user", [...activeUsers]);
  });

  socket.on("disconnect", () => {
    activeUsers.delete(socket.userId);
    io.emit("user disconnected", socket.userId);
  });

  socket.on("chat message", function (data) {
    io.emit("chat message", data);
  });

  socket.on("private message", ({ message, receiver }) => {
    console.log(message, receiver)
    const receiverSocket = activeUsersObj[receiver];
    if (receiverSocket) {
      socket.to(receiverSocket).emit("private message", {
        message,
        nick: socket.id,
      });
    }else{
      console.log('no socket found')
    }
  });

  socket.on("typing", function (data) {
    socket.broadcast.emit("typing", data);
    // io.emit("typing", data);
  });
});