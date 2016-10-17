// Start out by creating a http web server
var http = require('http');

var server = http.createServer(function(req, res){
	res.write(200, {'Content-type' : 'text/html'});
	res.end('Hello World');
});

server.listen(3000, function () {
	process.stdout.write('Listening at port 3000 for incomming requests \n');
});

process.stdin.on('data', function(data){
	process.stdout.write(data + '\n');
});