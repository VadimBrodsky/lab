const http = require('http');
const fs = require('fs');

let port = 1337;
// let ip = '127.0.0.1';
let ip = '10.0.9.95';

http.createServer((req, res) => {

  if (req.url === '/api') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    let obj = {
      firstname: 'John',
      lastname: 'Doe'
    };
    res.end(JSON.stringify(obj));
  } else if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream(__dirname + '/index.html').pipe(res);
  } else {
    res.writeHead(404);
    res.end();
  }


}).listen(port, ip);

