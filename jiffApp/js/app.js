var jiffApp = angular.module('jiffApp', ['ngRoute', 'ngResource'])

jiffApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/dashboard', {
    templateUrl: 'views/dashboard.html',
    controller: 'DashboardCtrl'
    })
    .when('/details/:guid', {
    templateUrl: 'views/details.html',
    controller: 'DetailsCtrl'
    })
    .otherwise({
      redirectTo: '/dashboard'
    });
}]);
