var socket = io();

document.getElementById('sendBtn').addEventListener('click', function(e){
    e.preventDefault();
    let msg = document.getElementById('msg');

    socket.emit('chat message', msg.value);
    msg.value = "";
})

socket.on('chat message', function(msg){
    let msg_wrap = document.getElementById('messages');
    let li = document.createElement('li');

    li.innerHTML = msg;
    msg_wrap.appendChild(li);
})