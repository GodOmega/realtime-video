const express = require("express");
const cors = require("cors");

const { createServer } = require("http");
const { Server } = require("socket.io");

const { CLIENT, PORT } = require("./config");
const roomSocket = require("./sockets/room.socket.js");

const app = express();

// Settings
app.use(express.json());

app.use(
  cors({
    origin: CLIENT,
  })
);

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: CLIENT,
  },
});

app.get("/room", (req, res) => {
  const time = Date.now() + "";
  const room = time.split("").slice(3, -1).join("");
  res.json({ room });
});

// Init sockets server
roomSocket(io);

httpServer.listen(PORT, () => {
  console.log("running on " + PORT);
});
