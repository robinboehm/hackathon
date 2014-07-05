angular.module('trivagoApp')
  .controller('choicesCtrl', function($scope, choicesService) {

    $scope.choices = choicesService.choices;
    $scope.choose = choicesService.choose;

  });


