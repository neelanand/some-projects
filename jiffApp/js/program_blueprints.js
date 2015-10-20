angular.module('jiffApp').factory('programBlueprints', ['$q', '$http', function($q, $http) {

  var searchBlueprint = function(blueprints, guid) {
    for(var i=0; blueprints.length; i++) {
      if(blueprints[i].guid === guid) {
        return blueprints[i];
      }
    }
  }

  return {
    "getBlueprints": function() {
      var deferred = $q.defer();

      $http.get('program_blueprints.json').success(function(data, status, headers, config) {
          return deferred.resolve(data);
        }).error(function(data, status, headers, config) {
          return deferred.reject(copy.error(data));
        });

      return deferred.promise;
    },
    "getBlueprint": function(guid) {
      var deferred = $q.defer();
      $http.get('program_blueprints.json').success(function(data, status, headers, config) {
          return deferred.resolve(searchBlueprint(data.program_blueprints, guid));
        }).error(function(data, status, headers, config) {
          return deferred.reject(copy.error(data));
        });

      return deferred.promise;
    }
  };
}]);
