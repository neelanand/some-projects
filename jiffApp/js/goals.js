angular.module('jiffApp').factory('goals', ['$q', '$http', function($q, $http) {

  var searchGoals = function(goals, program_guid) {
    var bunchOfGoals = [];
    for(var i = 0; i < goals.length; i++) {
      if(goals[i].program_blueprint_id === program_guid) {
        bunchOfGoals.push(goals[i]);
      }
    }
    return bunchOfGoals;
  }

  return {
    "getGoals": function(program_guid) {
      var deferred = $q.defer();
      $http.get('goals.json').success(function(data, status, headers, config) {
          return deferred.resolve(searchGoals(data.goals, program_guid));
        }).error(function(data, status, headers, config) {
          return deferred.reject(copy.error(data));
        });

      return deferred.promise;
    }
  };
}]);
