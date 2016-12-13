const express = require('express');
const app = express();

// use environment variables
let port = process.env.PORT || 3000;

// middleware to serve static files
app.use('/assets', express.static(__dirname + '/public'));

app.use('/', (req, res, next) => {
  // whenever the route is matched, the callback is invoked
  // can skip the route, will be run on all requests
  console.log('Reqiest URL: ' + req.url);
  next();  // calls the next middleware
});

// simple get request, express infers the content type header
app.get('/', (req, res) => {
  res.send('<html><head><link href="assets/style.css" rel="stylesheet"></head><body><h1>hello world!</h1></body></html>');
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
