const express = require('express');
const http = require('http');
const path = require('path');

const app = express();

const publicPath = path.resolve(__dirname, 'public');
app.use(express.static(publicPath));

const EVIL_IP = '123.45.67.89';

app.use((req, res, next) => {
  if (req.ip === EVIL_IP) {
    res.status(401).send('Not allowed!');
  } else {
    next();
  }
});

app.get('/', (req, res) => {
  res.end('Welcome to my homepage!');
});

app.get('/about', (req, res) => {
  res.end('Welcome to the about page!');
});

app.get('/weather', (req, res) => {
  res.end('The current weather is NICE.');
});

app.get('/hello/:who', (req, res) => {
  // this is terribly insecure
  res.end(`Hello, ${req.params.who}.`);
});

app.get('/express', (req, res) => {
  res.redirect('http://expressjs.com');
});

app.get('/song', (req, res) => {
  res.sendFile('/path/to/cool_song.mp3');
});

app.use((req, res) => {
  res.statusCode = 404;
  res.end('404');
});

http.createServer(app).listen(3000);
