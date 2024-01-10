var express = require('express');
var socket = require('socket.io');

var app = express();

var server = app.listen(5000,function(){
console.log("server is runing");
});

app.use(express.static("public_html"));

var io = socket(server);

io.on('connection',function(visitor){
console.log('new vistor', visitor.id);
visitor.on('message', function(data){
    io.sockets.emit('new_msg',data);
    });
});