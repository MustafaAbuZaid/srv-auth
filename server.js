// Get dependencies
const express = require('express');
const path = require('path');
var config = require('./config/config');
var proxy = require('http-proxy-middleware');
const bodyParser = require('body-parser');
// Get our API routes
const authenticationLocal = require('./server/routes/local/authentication');
const vehiclesLocal = require('./server/routes/local/vehicles');
const customersLocal = require('./server/routes/local/customers');

let routesHandler = require('./server/routes-handler');
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function (req, res, next) {
  if (req.headers.authorization)
    global['AccessToken'] = req.headers.authorization;
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});
app.set('images', path.join(__dirname, 'images'));
global.imagesPath = app.get('images');

new routesHandler(app);


// Set our api routes
app.use('/api/authentication', authenticationLocal);
app.use('/api/customers', customersLocal);
//route to another service
app.use('/api/vehicles', vehiclesLocal);
app.use('/api/tracking', proxy({ target: 'http://' + config.get('externalRepos').tracking }));

// Catch all other routes and return the index file
app.get('*', (req, res) => { res.sendFile(path.join(__dirname, 'dist/index.html')); });


module.exports = app;