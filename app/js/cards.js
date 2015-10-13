angular.module('vurbApp').controller('CardsCtrl', ['$scope', 'cardService',  function($scope, cardService) {

  var loadCards = function() {
    promise = cardService.getCards();
    return promise.then(function(data) {
      $scope.cards = data.cards;
    });
  };

  loadCards();
}]);
