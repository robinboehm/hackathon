angular.module('trivagoApp')
  .controller('choicesCtrl', function($scope, $routeParams, choicesService) {

    $scope.choices = choicesService;

  });


