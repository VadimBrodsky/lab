const express = require('express');
const http = require('http');
const morgan = require('morgan');
const apiRouter = require('./api_router');

const app = express();

app.use(morgan('short'));
app.get('/', (req, res) => res.end('Welcome to API site'));

// Use the router at api
app.use('/api', apiRouter);

http.createServer(app).listen(3000);
