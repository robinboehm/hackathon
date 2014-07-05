angular.module('trivagoApp')
  .config(function($routeProvider) {
    $routeProvider
      .when('/choices/:step', { templateUrl: 'views/choice.html', controller: 'choiceCtrl' })
      .otherwise({redirectTo: '/choices/0' });
  });