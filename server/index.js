const express = require('express');
const morgan = require('morgan');
const request = require('request-promise');

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(morgan('dev'));


// CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, x-size');
  res.header('Access-Control-Expose-Headers', 'x-total');
  next();
});

app.get('/*', (req, res) => {
  const options = {
    url: `https://api.zonky.cz${req.originalUrl}`,
    headers: {
      'x-size': req.headers['x-size'],
    },
    resolveWithFullResponse: true,
  };
  
  request(options)
    .then((response) => {
      res.set({'x-total': response.headers['x-total']});
      res.json(JSON.parse(response.body));
    })
    .catch(err => res.sendStatus(500));
});

const port = process.env.PORT || 3001;

app.listen(port);

// eslint-disable-next-line no-console
console.log(`App started on port: ${port}`);

module.exports = app;
