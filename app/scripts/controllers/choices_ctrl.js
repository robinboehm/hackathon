angular.module('trivagoApp')
  .controller('choicesCtrl', function($scope, choicesService) {

    $scope.choices = choicesService.choices;
    $scope.selectedChoices = choicesService.selectedChoices;
    $scope.choose = choicesService.choose;


    $scope.$watch('choices.length', function(step, oldStep){
      if (step === 0) { return; }
      var scrollPos = $(".startpage").height()+((step)*350)-$(window).height();
      $("html, body").animate({scrollTop:scrollPos}, '300');
    });

  });


