angular.module('trivagoApp')
  .controller('mainCtrl', function($scope, $location) {

    $scope.state = {
      selectedCity : {}
    };


    $scope.$watch('state.selectedCity', function(newValue){
      console.log('watch '+newValue);
      var iframeElement = angular.element('iframe')[0];
      if(!iframeElement){
        var wrapper = angular.element('.iframeWrapper')[0];
        iframeElement = angular.element('<iframe id="iframe"  scrolling="no" ></iframe>');
        angular.element(wrapper).append(iframeElement);
      }
      iframeElement.src="http://www.trivago.co.uk/?iPathId="+newValue;
    });

    $scope.moveLeft = function(href) {
      $scope.direction = 'left';
      $location.path(href);
    };

    $scope.moveRight = function(href) {
      $scope.direction = 'right';
      $location.path(href);
    };
  });


