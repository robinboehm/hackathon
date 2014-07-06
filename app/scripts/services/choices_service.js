angular.module('trivagoApp')
  .factory('choicesService', function ($http) {

    var choices = [];
    var possibleChoices = {};
    var selectedChoices = [];

    var stepOrder = ['general',
      //'price',
      'activityType', 'activity', 'climate'];

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
      choices.length = 0;
      for (var i = 0; i <= step; i++) {
        if (angular.isDefined(stepOrder[i])) {
          choices.push(possibleChoices[stepOrder[i]]);
        }
      }
    }

    function processValue(value){
      selectedChoices.push(value);
      console.log(value);
    }

    // Mock function for transition test
    function choose(value, step) {
      processValue(value);
      goToStep(step);
    }

    return {
      choices: choices,
      selectedChoices: selectedChoices,
      choose: function (value, parentIndex) {
        return choose(value, parentIndex);
      }
    };
  });
