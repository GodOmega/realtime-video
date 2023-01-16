const randomNumber = require("../utils/ramdonNumber");
const colors = [
  "#FC9216",
  "#FF3B20",
  "#00F37F",
  "#FF00D6",
  "#3817FE",
  "#2DFFF2",
];

function roomSocket(io) {
  io.on("connection", (socket) => {
    const randomIndex = randomNumber(0, colors.length - 1);
    socket.color = colors[randomIndex];

    socket.on("add-nickname", (nickname) => {
      socket.nickname = nickname;
    });

    socket.on("join-room", (room) => {
      const messageBody = {
        user: socket.nickname,
        messageType: "newUser",
      };
      socket.join(room);
      socket.to(room).emit("user-connected", messageBody);
    });

    socket.on("send-message", ({ message, room, username }) => {
      const messageBody = {
        message,
        user: username,
        userColor: socket.color,
        messageType: "newMessage",
      };
      io.in(room).emit("message-received", messageBody);
    });

    socket.on("load-url", ({ url, room }) => {
      io.in(room).emit("get-url", url);
    });

    socket.on("play-video", (room) => {
      socket.to(room).emit("play-video");
    });

    socket.on("pause-video", (room) => {
      socket.to(room).emit("pause-video");
    });

    socket.on("sync", ({ room, currentTime }) => {
      io.in(room).emit("pause-video");
      io.to(room).emit("active-sync", currentTime);
    });

    socket.on("desactive-sync", (room) => {
      io.in(room).emit("desactive-sync");
    });
  });
}

module.exports = roomSocket;
