const express = require('express');
const app = express();

// use environment variables
let port = process.env.PORT || 3000;

// simple get request, express infers the content type header
app.get('/', (req, res) => {
  res.send('<html><head></head><body><h1>hello world!</h1></body></html>');
});

// respond with a json object
app.get('/api', (req, res) => {
  res.json({ firstName: 'Jon', lastName: 'Snow' });
});

// routing example
app.get('/person/:id', (req, res) => {
  res.send(`<html><head></head><body><h1>hello ${req.params.id}!</h1></body></html>`);
});

app.listen(port);
