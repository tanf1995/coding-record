const app = require('express')();
const http = require('http').createServer(app);
const path = require('path');
const io = require('socket.io')(http);


app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './html/index.html'));
});

app.get('/html/socket.js', (req, res) => {
    res.sendFile(path.resolve(__dirname, './html/socket.js'));
})

io.on('connection', socket => {
    console.log('a user connected');
    socket.on('disconnect', () => console.log('a user disconnected'))
    socket.on('chat message', msg => {
        console.log("server get: " + msg);
        io.emit('chat message', msg);
    })
});


http.listen(3000, () => console.log('listening on localhost:3000'));