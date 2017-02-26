const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const flash = require('connect-flash');
const routes = require('./routes');

const app = express();

mongooser.connect('mongodb://localhost:27017/test');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('short'));
app.use(bodyParser.urlencoded({ enxtended: false }));
app.use(cookieParser());
app.use(session({
  secret: 'TKRv01Js=HYqrvagQ#&!F!%V]Ww/4KiVs$s,<<MX',
  resave: true,
  savUninitialized: true
}));
app.use(flash());

app.use(routes);

app.listen(app.get('port'), () => {
  console.log(`Server started on port ${app.get('port')}`);
})
