const express = require('express');
const path = require('path');
const http = require('http');

const app = express();

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', {
    message: 'Hey everyone! This is my webpage.'
  });
});

http.createServer(app).listen(3000);
