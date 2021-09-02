const app = require("./app");

const http = require('http');
const server = http.createServer(app);
const socketio = require('socket.io');
const io = socketio(server, {
    cors: {
        origin: "*"
    }
});




io.on('connection', (socket) => {

    // When a user joins a room
    socket.on('join', (callback) => {

        if (error) return callback(error);

        socket.join("room");
        console.log("User connected");

        callback();
    })


    // When a new suggestion gets added
    socket.on('newSuggestion', (profile_id) => {
        io.emit('suggestionAdded');
    })


    // When a user disconnects
    socket.on('disconnect', () => {
        //const user = removeUser(socket.id);

        /*if (user) {
            io.to(user.room).emit('roomData', {room: user.room, users: getUsersInRoom(user.room)})
        }*/
    })
});














const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})