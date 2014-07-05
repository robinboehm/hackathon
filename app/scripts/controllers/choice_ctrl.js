angular.module('trivagoApp')
  .controller('choiceCtrl', function($scope, $routeParams) {
    $scope.choices = choices = [
      {
        name: 'Do you like it... ?',
        color: '#00d4b4',
        items: [{ name: 'hot',  value: '1' }, { name: 'cold', value: '2'  }]
      },
      {
        name: 'Which direction... ?',
        color: '#d4081a',
        items: [{ name: 'left', value: '1' }, { name: 'right', value: '2' }]
      },
      {
        name: 'Do you like it... ?',
        color: '#c09853',
        items: [{ name: 'big',  value: '1' }, { name: 'small', value: '2' }]
      }
    ];
    var choiceCount = choices.length;
    var currentChoiceIndex = parseInt($routeParams.step || '0');

    $scope.choice = choices[currentChoiceIndex];

    $scope.prevChoice = function(href) {
      if (currentChoiceIndex === 0) { return; }
      currentChoiceIndex = --currentChoiceIndex % choiceCount;
      $scope.moveRight('/choices/'+currentChoiceIndex);
    };

    $scope.nextChoice = function() {
      currentChoiceIndex = ++currentChoiceIndex % choiceCount;
      $scope.moveLeft('/choices/'+currentChoiceIndex);
    }

    $scope.makeChoice = function() {
      $scope.nextChoice();
    }

  });


