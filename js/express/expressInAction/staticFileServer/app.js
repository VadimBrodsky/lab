const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

app.use((req, res) => {
  console.log(`Request IP: ${req.url}`);
  console.log(`Request date: ${new Date()}`);
  next();
});

app.listen(3000, () => console.log('App started on port 300'));
