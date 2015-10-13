angular.module('vurbApp').factory('cardService', ['$q', '$http', function($q, $http) {

  return {
    "getCards": function() {
      var deferred = $q.defer();

      $http.get('https://gist.githubusercontent.com/helloandrewpark/0a407d7c681b833d6b49/raw/5f3936dd524d32ed03953f616e19740bba920bcd/gistfile1.js').success(function(data, status, headers, config) {
          console.log(data);
          return deferred.resolve(data);
        }).error(function(data, status, headers, config) {
          return deferred.reject(copy.error(data));
        });

      return deferred.promise;
    }
    
  };
}]);
