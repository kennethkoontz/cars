var express = require('express');
var morgan = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();

mongoose.connect('mongodb://ken:password@ds047085.mongolab.com:47085/kingsburg');

var Car = mongoose.model('Car', {
  make: String,
  model: String
});

app.use(morgan('short'));
app.use(express.static('static'));
app.use(bodyParser.json());

app.get('/cars', function(req, res) {
  var cars = [
    { make: 'Toyota', model: 'Tacoma' },
    { make: 'Tesla', model: 'Roadster' },
    { make: 'Honda', model: 'Accord' }
  ];
  res.send(cars);
});

app.post('/cars', function(req, res) {
  var car = new Car(req.body);
  car.save(function (err) {
    if (err)
      return res.send(err);
    return res.send(car)
  });
});

app.listen(8000, function () {
  console.log('App is ready at http://localhost:8000');
});
