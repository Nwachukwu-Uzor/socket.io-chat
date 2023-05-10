import { Server } from "socket.io";

import { createServer } from "http";
import express from "express";
import cors from "cors";

const app = express();
const PORT = 8000;

const httpServer = createServer(app);

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:5173",
  },
});

// const io = SocketIO(httpServer);

io.on("connection", (socket) => {
  // ...
  socket.on("sendMessage", (data) => {
    console.log(data);
    socket.emit("check", "Received");
  });
  socket.emit("check", "You're connected");
});

app.get("/test", (req, res) => {
  return res.status(200).json({ message: "Express working" });
});

httpServer.listen(8000, () => {
  console.log(`Application is running on port ${PORT}`);
});
