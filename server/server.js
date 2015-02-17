var express = require('express');
var morgan = require('morgan');
var mementosRouter = require('./mementos/mementos-router.js');
var momentsRouter = require('./moments/moments-router.js');
var app = express();

app.set('port', process.env.PORT || 3000);

// morgan is the request logger middleware for node
app.use(morgan('combined'));


app.listen(app.get('port'), function() {
  'use strict';
  console.log('Listening on port ' + app.get('port'));
});

// home page, this is temporary
app.get('/', function(req, res) {
  'use strict';
  res.send('Hello Alan!');
});

// router for handling all requests to the /mementos endpoint
app.use('/mementos', mementosRouter);

// router for handling all requests to the /moments endpoint
app.use('/moments', momentsRouter);

module.exports = app;