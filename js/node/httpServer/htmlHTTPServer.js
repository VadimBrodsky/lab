const http = require('http');
const fs = require('fs');

let port = 1337;
// let ip = '127.0.0.1';
let ip = '10.0.9.95';

http.createServer((req, res) => {

  res.writeHead(200, { 'Content-Type': 'text/html' });

  // read the html file from the file system
  // specify utf8 to convert it to string
  let html = fs.readFileSync(__dirname + '/index.html', 'utf8');
  let message = 'with dynamic templates';
  // replace placeholder with dynamic data
  html = html.replace('{Message}', message);

  res.end(html);

}).listen(port, ip);

