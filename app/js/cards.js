angular.module('vurbApp').controller('CardsCtrl', ['$scope', 'cardService',  function($scope, cardService) {
$scope.loading = true;

// This 'setTimoeut' is only used to demonstrate the loading text on the template. 
setTimeout(function() {
    promise = cardService.getCards();
    return promise.then(function(data) {
      $scope.cards = data.cards;
      $scope.loading = false;
    });
  }, 2000);

}]);
