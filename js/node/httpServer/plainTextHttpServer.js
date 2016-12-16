const http = require('http');

let port = 1337;
// let ip = '127.0.0.1';
let ip = '10.0.9.95';

http.createServer((req, res) => {

  // response is a writable stream
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  // last methods in the response stream is end
  res.end('Hello World\n');

}).listen(port, ip);
