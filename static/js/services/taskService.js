'use strict';
 angular.module('achievementApp').factory('tasks', function($resource){
  return $resource('/tasks/:_id',{_id: '@_id'},{
   get: {method:'GET', isArray: true},
   add: {method:'POST'},
   delete: {method: 'DELETE'}
  });
});
