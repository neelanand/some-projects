angular.module('jiffApp').controller('DetailsCtrl', ['$scope', '$rootScope', '$q', '$routeParams', '$location', 'programBlueprints', 'goals', function($scope, $rootScope, $q, $routeParams, $location, programBlueprints, goals) {
  $scope.guid = $routeParams.guid;

  var getBlueprint = function() {
    promise = programBlueprints.getBlueprint($scope.guid);
    return promise.then(function(data) {
      $scope.blueprint = data;
    });
  }

  getBlueprint();

  var getGoals = function() {
    promise = goals.getGoals($scope.guid);
    return promise.then(function(data) {
      $scope.goals = data;
      $scope.totalIncentive = calculateIncentives($scope.goals);
    });
  }

  getGoals();

  $scope.goBackToDashboard = function() {
    $location.path("/dashboard");
  }

  var calculateIncentives = function(goals) {
    var totalIncentive = 0;
    for(var i = 0; i < goals.length; i++) {
      totalIncentive += goals[i].incentive_value;
    }
    return totalIncentive;
  }
}]);
