'use strict'

var express = require('express');
var parser  = require('body-parser');
var router = require('./api');

var app = express();

require('./database');
require('./seed.js');

app.use('/',express.static('../public'));
app.use(parser.json());
app.use('/api', router);


app.listen(3000, function(){

  console.log("the server is running");
});
