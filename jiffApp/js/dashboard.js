angular.module('jiffApp').controller('DashboardCtrl', ['$scope', 'programBlueprints', '$location', function($scope, programBlueprints, $location) {

  var loadBlueprints = function() {
    promise = programBlueprints.getBlueprints();
    return promise.then(function(data) {
      $scope.blueprints = data.program_blueprints;
    });
  };

  $scope.viewBlueprint = function(blueprint) {
    $location.$$search = {}
    $location.path("/details/" + blueprint.guid);
  };

  loadBlueprints();
}]);
