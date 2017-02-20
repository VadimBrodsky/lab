const path = require('path');
const express = require('express');
const logger = require('morgan');
const zipdb = require('zippity-do-dah');
const DarkSky = require('forecastio');

const app = express();

const APIKey = process.env.DARKSKY_API_KEY;
const weather = new DarkSky(process.env.DARKSKY_API_KEY);

app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('short'));

app.get('/', (req, res) => {
  res.render('index');
});

app.get(/^\/(\d{5})$/, (req, res, next) => {
  const zipcode = req.params[0];
  const location = zipdb.zipcode(zipcode);

  if (!location.zipcode) {
    next();
    return;
  }

  const latitude = location.latitude;
  const longitude = location.longitude;

  weather.forecast(latitude, longitude, (err, data) => {
    if (err) {
      console.log(err);
      next();
      return;
    }

    res.json({
      zipcode: zipcode,
      temperature: data.currently.temperature
    });
  });
});

app.use((req, res) => {
  res.status(404).render('404');
});

app.listen(3000, () => {
  console.log(`app started using API KEY: ${process.env.DARKSKY_API_KEY}`);
});
