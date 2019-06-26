let socketio = require("socket.io");

let io;
let guestNumber = 1;
let nickNames = {};
let namesUsed = [];
let currentRoom = {};


// tools function
let assignGuestName = (socket, guestNumber, nickNames, namesUsed) => {
    let name = 'Guest' + guestNumber;

    nickNames[socket.id] = name;
    socket.emit('nameResult', {
        success: true,
        name: name
    });
    namesUsed.push(name);
    return guestNumber + 1;
}

let joinRoom = (socket, room) => {
    socket.join(room);
    currentRoom[socket.id] = room;
    socket.emit('joinResult', {room: room});
    socket.broadcast.to(room).emit('message', {
        text: nickNames[socket.id] + ' has joined ' + room + '.'
    });

    let userInRoom = io.sockets.clients(room);
    if(userInRoom.length > 1){
        let usersInRoomSummary = 'Userss currently in ' + room + ': ';

        for(let index in userInRoom){
            let userSocketId = userInRoom[index].id;

            if(userSocketId != socket.id){
                if(index > 0){
                    usersInRoomSummary += ", ";
                }
                usersInRoomSummary += nickNames[userSocketId];
            }
        }
        usersInRoomSummary += '.';
        socket.emit('message', {text: usersInRoomSummary});
    }
}

let handleNameChangeAttempts = (socket,  nickNames, namesUsed) => {
    socket.on('nameAttempt', name => {
        if(name.indexOf('Guest') == 0){
            socket.emit('nameResult', {
                success: false,
                message: 'Names cannot begin with "Guest".'
            });
        }else{
            if(namesUsed.indexOf(name) == -1){
                let previousName = nickNames[socket.id];
                let previousNameIndex = namesUsed.indexOf(previousName);

                namesUsed.push(name);
                nickNames[socket.id] = name;
                delete namesUsed[previousNameIndex];

                socket.emit('nameResult', {
                    success: true,
                    name: name
                });

                socket.broadcast.to(currentRoom[socket.id]).emit('message', {
                    text: previousName + ' is now known as ' + name + '.'
                });
            }else{
                socket.emit('nameResult', {
                    success: false,
                    message: 'That name is already in use.'
                })
            }
        }
    })
}

let handleMessageBroadcasting = (socket) => {
    socket.on('message', message => {
        socket.broadcast.to(message.room).emit('message', {
            text: nickNames[socket.id] + ': ' + message.text
        });
    });
};

let handleRoomJoining = (socket) => {
    socket.on('join', room => {
        socket.leave(currentRoom[socket.id]);
        joinRoom(socket, room.newRoom);
    })
}

let handleeClientDisconnection = (socket) => {
    socket.on('disconnect', () => {
        let nameIndex = namesUsed.indexOf(nickNames[socket.id]);

        delete namesUsed[nameIndex];
        delete nickNames[socket.id];
    })
}


exports.listen = server => {
    io = socketio.listen(server);
    io.set('log level', 1);
    io.sockets.on('connection', (socket) => {
        guestNumber = assignGuestName(socket, guestNumber, nickNames, namesUsed);
        joinRoom(socket, 'Lobby-default');

        handleMessageBroadcasting(socket, nickNames);
        handleNameChangeAttempts(socket, nickNames, namesUsed);
        handleRoomJoining(socket);

        socket.on('rooms', function(){
            socket.emit('rooms', io.sockets.manager.rooms);
        });

        handleeClientDisconnection(socket, nickNames, namesUsed);
    })
}
