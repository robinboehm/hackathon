angular.module('trivagoApp')
  .controller('mainCtrl', function($scope, $location, $routeParams) {

    $scope.moveLeft = function(href) {
      $scope.direction = 'left';
      $location.path(href);
    };

    $scope.moveRight = function(href) {
      $scope.direction = 'right';
      $location.path(href);
    };
  });


