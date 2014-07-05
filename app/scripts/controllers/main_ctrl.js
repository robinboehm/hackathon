angular.module('trivagoApp')
  .controller('mainCtrl', function($scope, $location) {
    $scope.choices = [
      [{ name: 'hot', value: '1' }, { name: 'cold', value: '2' }],
      [{ name: 'left', value: '1' }, { name: 'right', value: '2' }],
      [{ name: 'big', value: '1' }, { name: 'small', value: '2' }]
    ]

    $scope.moveLeft = function(href) {
      $scope.direction = 'left';
      $location.path(href);
    };

    $scope.moveRight = function(href) {
      $scope.direction = 'right';
      $location.path(href);
    };
  });


