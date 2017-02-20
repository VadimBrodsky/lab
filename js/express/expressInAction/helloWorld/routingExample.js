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

// Using Regex to match a pattern
app.get(/^\/users\/(\d+)$/, (req, res) => {
  const userId = parseInt(req.params[0], 10);
  res.end(`Your are user ${userId}`);
});

// Match UUID via Regex
const uuidRegex = /^([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{3}-[89ab[0-9a-f]{3}-[0-9a-f]{12})$/i;
app.get(uuidRegex, (req, res) => {
  const uuid = req.params[0];
  res.end(`Your uuid: ${uuid}`);
});

// Match using query strings
app.get('/search', (req, res) => {
  const query = req.query.q;
  res.end(`You asked for ${query}`);
});

app.use((req, res) => {
  // res.statusCode = 404;
  // res.end('404');

  // as one line
  res.status(404).send('Page not found!');
});

http.createServer(app).listen(3000);
