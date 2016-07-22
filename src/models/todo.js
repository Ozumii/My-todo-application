'use strict';

var mongoose = require('mongoose');


var todoschema = new mongoose.Schema({

    name:String,
    completed:Boolean
});

var model = mongoose.model('Todo', todoschema);

module.exports = model;
