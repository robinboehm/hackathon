angular.module('trivagoApp')
  .directive('scrollPosition', function($window) {
    return {
      scope: {
        scroll: '=scrollPosition'
      },
      link: function(scope, element, attrs) {
        var windowEl = angular.element($window);
        var handler = function() {
          scope.scroll = windowEl.scrollTop();
        };
        windowEl.bind('scroll', scope.$apply.bind(scope, handler));
        handler();
        console.log('jo')
      }
    };
  });