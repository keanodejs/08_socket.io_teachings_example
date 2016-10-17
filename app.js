// Read a html file and display it in the browser
var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {

    fs.readFile('index.html', 'utf8', function(index) {
        res.writeHead(200, { 'Content-type': 'text/html' });
        res.end('Hello World');
    });
});

server.listen(3000, function() {
    process.stdout.write('Listening at port 3000 for incomming requests \n');
});

// a second listener (you can have many)
//	process.stdin.on('data', function(data){
//		process.stdout.write(data + '\n');
//	});
