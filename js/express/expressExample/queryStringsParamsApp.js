const express = require('express');
const bodyParser = require('body-parser');
const app = express();

let urlencodedParser = bodyParser.urlencoded({ extended: false });
let jsonParser = bodyParser.json();


let port = process.env.PORT || 3000;
app.use('/assets', express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => { res.render('index'); });

// parse simple query string
app.get('/person/:id', (req, res) => {
  res.render('person', {
    id: req.params.id,
    qString: req.query.qstr
  });
});

// parse form post
app.post('/person', urlencodedParser, (req, res) => {
  res.send('Thank You');
  console.log(req.body.firstname);
  console.log(req.body.lastname);
});

// parse xhr json request
app.post('/personjson', jsonParser, (req, res) => {
  res.send('Thank you for JSON data!');
  console.log(req.body.firstname);
  console.log(req.body.lastname);
});

app.listen(port);
