'use strict';
 angular.module('achievementApp').factory('tasks', function($resource){
  return $resource('http://localhost:3000/tasks/:_id',{_id: '@_id'},{
   get: {method:'GET', isArray: true},
   add: {method:'POST'},
   delete: {method: 'DELETE'}
  });
});
