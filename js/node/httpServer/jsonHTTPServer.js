const http = require('http');

let port = 1337;
// let ip = '127.0.0.1';
let ip = '10.0.9.95';

http.createServer((req, res) => {

  res.writeHead(200, { 'Content-Type': 'application/json' });
  let obj = {
    firstname: 'John',
    lastname: 'Doe'
  };
  res.end(JSON.stringify(obj));

}).listen(port, ip);

