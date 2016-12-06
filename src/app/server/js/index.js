var path = require('path');
var express = require('express');

var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use('/static/www', express.static(path.join(__dirname, '../static/www')));
app.use('/static/data', express.static(path.join(__dirname, '../static/data')));

app.get('/', function(req, res){
    res.sendFile(path.resolve(__dirname, '../html/index.html'));
});

http.listen(3000, function(){
    console.log('listening on *:3000');
});

io.on('connection', function(socket){
    socket.on('chat message', function(msg){
        io.emit('chat message', msg);
    });
});
