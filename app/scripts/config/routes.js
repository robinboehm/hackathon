angular.module('trivagoApp')
  .config(function($routeProvider) {
    $routeProvider
      .when('/choices', { templateUrl: 'views/choices.html', controller: 'choicesCtrl' })
      .otherwise({redirectTo: '/choices' });
  });