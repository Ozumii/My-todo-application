'use strict';
var angular = require('angular');
angular.module('todoListApp')
.service('dataService',function($http,$q){

  this.helloWorld = function(){

    console.log("This is the data service's method");
  };

this.getTodos = function(callback)  {
$http.get('/api/todos')
  .then(callback)
};

this.deleteTodo = function(todo){
  console.log("the "+ todo.name + " has been deleted!");
};

this.saveTodos = function(todos){
  console.log( todos.length + " have been saved");
  var queue = [];
  todos.forEach(function(todo){

    var request;

    if(!todo._id){
      request = $http.post('/api/todos',todo)
    } else {
      request = $http.put('/api/todos/' + todo._id ,todo).then(function(result){
      todo = result.data.todo;
  return  todo;
});
    };

    queue.push(request);
  });
  return $q.all(queue).then(function(results){

    console.log("I saved" + todos.length + "todos!");
  });
};

});
