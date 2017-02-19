const express = require('express');
const morgan = require('morgan');
const path = require('path');
const fs = require('fs');

const app = express();

/*
app.use((req, res, next) => {
  console.log(`Request IP: ${req.ip}`);
  console.log(`Request date: ${new Date()}`);
  next();
});
*/

const logger = morgan('short');
app.use(logger);

/*
app.use((req, res, next) => {
  const filePath = path.join(__dirname, 'static', req.url);
  fs.exists(filePath, (exists) => {
    if (exists) {
      res.sendFile(filePath, (err) => {
        if (err) {
          // enter error more if can't read file
          next(new Error('Error sending file!'));
        }
      });
    } else {
      next();
    }
  });
});
*/

// express builtin static file middleware
const staticPath = path.join(__dirname, 'static');
app.use(express.static(staticPath));

// middleware that logs all errors
app.use((err, req, res, next) => {
  console.log(err);
  next(err);
});

app.use((req, res) => {
  res.status(404);
  res.send('File not found!');
});

app.listen(3000, () => console.log('App started on port 300'));
