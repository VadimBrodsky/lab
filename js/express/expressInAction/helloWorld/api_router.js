const express = require('express');

const ALLOWED_IPS = [
  '127.0.0.1',
  '123.456.7.89'
];

const api = express.Router();

api.use((req, res, next) => {
  const userIsAllowed = ALLOWED_IPS.indexOf(req.ip) !== -1;

  if (userIsAllowed) {
    res.status(401).send('Not authorized');
  } else {
    next();
  }
});

api.get('/users', (req, res) => { res.send('get users'); });
api.post('/user', (req, res) => { res.send('post user'); });
api.get('/messages', (req, res) => { res.send('get messages'); });
api.post('/message', (req, res) => { res.send('post message'); });

module.exports = api;
