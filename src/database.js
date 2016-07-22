'use strict';

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/thingstodo', function(err){

  if(err){
    console.log('Failed to connect to database');
  }
  else{
    console.log('Successfully connected to database');
  }

});
