// Requires a single file
var greet = require('./greet');
greet();

// Requires a folder with index.js
var bye = require('./talk');
bye.english();
bye.spanish();

