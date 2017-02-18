const express = require('express');
const logger = require('morgan');
const http = require('http');
const path = require('path');

const app = express();

app.use(logger('short'));

const publicPath = path.resolve(__dirname, 'public');
app.use(express.static(publicPath));

app.use((req, res, next) => {
  const minute = (new Date()).getMinutes();
  if ((minute % 2) === 0) {
    next();
  } else {
    res.statusCode = 403;
    res.end('Not authorized');
  }
});

app.use((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello, World');
});

http.createServer(app).listen(3000);
