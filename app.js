// Use the socket.io module
var http = require('http');
var fs = require('fs');

var index = fs.readFileSync(__dirname + '/index.html');

var server = http.createServer(function(req, res) {

    res.writeHead(200, { 'Content-type': 'text/html' });
    res.end(index);

});

// Implementing the Socket.io part
// Socket.io server listens to our app
var io = require('socket.io').listen(server);

io.on('connection', function(socket) {
    console.log('a user connected with id: ' + socket.id);

    // Use socket to communicate with this particular client only, sending it it's own id
    socket.emit('welcome', { message: 'Welcome!', id : socket.id});

});

server.listen(3002);
