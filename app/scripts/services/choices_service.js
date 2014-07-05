angular.module('trivagoApp')
  .factory('choicesService', function ($http) {

    var choices = [];
    var possibleChoices = {};

    var stepOrder = ['general', 'price', 'activityType', 'activity', 'climate']

    $http.get('data/places.json')
      .then(function (response) {
        // Array -> Object- Map
        angular.forEach(response.data, function (element) {
          if (angular.isUndefined(possibleChoices[element.key[0]])) {
            possibleChoices[element.key[0]] = [];
          }
          possibleChoices[element.key[0]].push(element);
        });

        // Init Category
        goToStep(0);
      });


    function goToStep(step) {

      scrollPos = $(".startpage").height()+((step+1)*350)-$(window).height();
      $("html, body").animate({scrollTop:scrollPos}, '300');
      
      choices.length = 0;
      for (var i = 0; i <= step; i++) {
        if (angular.isDefined(stepOrder[i])) {
          choices.push(possibleChoices[stepOrder[i]]);
        }
      }
    }

    function processValue(value){
      console.log(value);
    }

    // Mock function for transition test
    function choose(value, step) {
      processValue(value);
      goToStep(step);
    }

    return {
      choices: choices,
      choose: function (value, parentIndex) {
        return choose(value, parentIndex);
      }
    };
  });
