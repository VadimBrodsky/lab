const http = require('http');
const fs = require('fs');

let port = 1337;
// let ip = '127.0.0.1';
let ip = '10.0.9.95';

http.createServer((req, res) => {

  res.writeHead(200, { 'Content-Type': 'text/html' });
  // read the html file from the file system as a stream
  fs.createReadStream(__dirname + '/index.html').pipe(res);

}).listen(port, ip);

