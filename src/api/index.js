'use strict';

var express = require('express');
var router = express.Router();
var Todo = require('../models/todo.js');
//var todos = require('../../mock/todos.json');

var router = express.Router();

router.get('/todos', function(req,res){

  Todo.find({}, function(err, todos){
    if(err){
      return res.status(500).json({message:err.message});
    }
    res.json({todos:todos});
  });

});

// TODO: Add POST route to create new entries
router.post('/todos',function(req,res){
  var todo = req.body;
  Todo.create(todo, function(err, todo){
    if(err){
      return res.status(500).json({err:err.message});
    }
  res.json({'todo':todo, message:'Todo Created'});
})
});

// PUT route to update entries
router.put('/todos/:id',function(req,res){
  var id = req.params.id;
  var todo = req.body;
  if(todo && todo._id !== id){

    return res.status(500).json({err:'id doesnt match'});
  }
  Todo.findByIdAndUpdate(id,todo,{new:true}, function(err, todo){
    if(err){
      return res.status(500).json({err:err.message});
    }
  res.json({'todo':todo, message:'Todo updated'});
})
});

//TODO: Add DELETE route to delete entries deletes in post man but not on button click yet
router.delete('/todos/:id', function(req,res){

    return Todo.findById(req.params.id,function(err,todo){
      return todo.remove(function (err){
      if(!err){
        console.log("This task has been deleted!");
            }
            else{
              console.log({message:'This task was not found'});
            }
          });
    });
});



module.exports = router;
