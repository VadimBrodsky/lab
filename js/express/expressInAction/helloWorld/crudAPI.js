const express = require('express');

const app = express();

// Express supports all 23 HTTP verbs:
// checkout, copy, delete, get, head, lock, merge, mkactivity, mkcol, move,
// m-search, notify, options, patch, post, purge, put, report, search,  subscribe
// trace, unlock, unsubscribe

app.get('/', (req, res) => {
  res.send('an idempotent GET request');
});

app.post('/', (req, res) => {
  res.send('a POST request');
});

app.put('/', (req, res) => {
  res.send('updated with PUT');
});

app.delete('/', (req, res) => {
  res.send('destoyed with DELETE');
});

app.listen(3000, () => console.log('App is listening on port 3000'));
