const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);

const port = 3001;
var users = [];

const addUser = (userName, roomID) => {
  // console.log(`User ${userName} joined room ${roomID}`);

  users.push({
    userName: userName,
    roomID: roomID,
  });

  // console.log(getRoomUsers(roomID));
};

const getRoomUsers = (roomID) => {
  return users.filter((user) => user.roomID == roomID);
};

const userLeave = (userName) => {
  users = users.filter((user) => user.userName != userName);
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

io.on("connection", (socket) => {
  // console.log("Someone just connected ✅");
  socket.on("join-room", ({ userName, roomID }) => {
    if (userName && roomID) {
      socket.join(roomID);
      addUser(userName, roomID);
      socket.to(roomID).emit("user-connected", userName); // notify existing users about new connection

      io.to(roomID).emit("all-users", getRoomUsers(roomID)); // room users
    }

    socket.on("disconnect", () => {
      console.log("Disconnected");
      socket.leave(roomID);
      userLeave(userName);
      io.to(roomID).emit("all-users", getRoomUsers(roomID)); // room users
    });
  });
});

server.listen(port, () => {
  console.log("Zoom Clone API listening on localhost:3001");
});
