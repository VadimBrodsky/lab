const express = require('express');
const http = require('http');
const path = require('path');

const app = express();

const publicPath = path.resolve(__dirname, 'public');
app.use(express.static(publicPath));

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

app.use((req, res) => {
  res.statusCode = 404;
  res.end('404');
});

http.createServer(app).listen(3000);
