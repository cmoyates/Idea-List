const app = require("./app");
const http = require('http');
const server = http.createServer(app);
const socketio = require('socket.io');
const io = socketio(server, {
    cors: {
        origin: "*"
    }
});

globalThis.io = io;

io.on('connection', (socket) => {

    // When a user joins a room
    socket.on('join', (callback) => {

        socket.join("room");
        console.log("User connected");

        callback();
    })
});














const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})