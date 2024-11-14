const http = require ('http');

//Create the HTTP server
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello, Node.js\n');
});

//Listen on port 3000
server.listen(3000, 'localhost', () => {
    console.log('Server is running at http://localhost:3000/');
});