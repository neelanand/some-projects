var vurbApp = angular.module('vurbApp', ['ngRoute']);

vurbApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
    templateUrl: 'views/cards.html',
    controller: 'CardsCtrl'
    });
}]);
