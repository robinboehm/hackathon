angular.module('trivagoApp')
  .config(function($routeProvider) {
    $routeProvider
      .when('/1', { templateUrl: 'views/first_page.html' })
      .when('/2', { templateUrl: 'views/second_page.html' })
      .otherwise({redirectTo: '/1' });
  });