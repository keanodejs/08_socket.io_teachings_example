var express = require('express');
var app = express();
var http = require('http').createServer(app);
var fs = require('fs');

// var index = fs.readFileSync(__dirname + '/index.html');

// var server = http.createServer(function(req, res) {

//     res.writeHead(200, { 'Content-type': 'text/html' });
//     res.end(index);

// });

// Use express framework and routing options

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});

// Implementing the Socket.io part
// Socket.io server listens to our app
var io = require('socket.io').listen(http);

io.on('connection', function(socket) {
    console.log('a user connected with id: ' + socket.id);

    // Use socket to communicate with this particular client only, sending it it's own id
    socket.emit('welcome', { message: 'Welcome!', id: socket.id });

    // Use socket to communicate with all clients, sending them the id of the new connection
    socket.broadcast.emit('welcomeAll', { message: 'Welcome to: ' + socket.id, id: socket.id });

    // Listening for the even 'boo' and the execute the callback 'console.log'
    socket.on('boo', function(data) {
        console.log(data);
    });

    socket.on('disconnect', function(info) {
        socket.broadcast.emit('goodbuy', { message: 'Good Bye: ' + socket.id, id: socket.id });
    });
});

http.listen(3002);
