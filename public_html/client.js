var socket = io.connect('https://one-time-chat-ip7z.onrender.com');

var username = document.getElementById('username');
var Message = document.getElementById('Message');
var send = document.getElementById('send');
var chat =document.getElementById('chat');

send.addEventListener('click',function(){
socket.emit('message',{
    username:username.value,
    Message:Message.value,
});
});

socket.on('new_msg', function (data) {
    chat.innerHTML += '<div class="container"><strong>' + data.username + ':</strong>' + data.Message + '</div>';
 });
 
