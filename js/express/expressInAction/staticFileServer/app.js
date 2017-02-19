const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

app.use((req, res, next) => {
  console.log(`Request IP: ${req.ip}`);
  console.log(`Request date: ${new Date()}`);
  next();
});

app.use((req, res, next) => {
  const filePath = path.join(__dirname, 'static', req.url);
  fs.exists(filePath, (exists) => {
    if (exists) {
      res.sendFile(filePath);
    } else {
      next();
    }
  });
});

app.use((req, res) => {
  res.status(404);
  res.send('File not found!');
});

app.listen(3000, () => console.log('App started on port 300'));
