// For Node that does not support ES6
// require('babel-register');
// require('babel-polyfill');

global.document = require('jsdom').jsdom('<body><div id="app"></div></body>');
global.window = document.defaultView;
global.navigator = window.navigator;
