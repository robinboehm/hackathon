angular.module('trivagoApp')
  .factory('choicesService', function ($http) {

    var choices = [];
    var possibleChoices = {};
    var selectedChoices = [];

    var stepOrder = [
      'general',
      //'price',
      'climate',
      'activityType',
      'activity'
      ];

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
      console.log(step);
      
      var tags = selectedChoices.map(function(choice) {
        return choice.key[2];
      });
      tags = tags.concat.apply([], tags);

      for (var i = 0; i <= step; i++) {
        if(stepOrder.length <= i) {
          console.log('Last step');
          break;
        }
        if (angular.isDefined(stepOrder[i])) {
          var filteredChoices = possibleChoices[stepOrder[i]].filter(function(choice) {
            var excludeTags = choice.key[3] || [];

            if(excludeTags.length === 0) {
              return true;
            }

            var isExcluded = tags.some(function(tag) {
              return excludeTags.some(function(excludeTag) {
                return excludeTag === tag;
              });
            });
            return !isExcluded;
          });
          if(filteredChoices.length > 0) {
            console.log(filteredChoices);
            choices.push(filteredChoices);
          } else {
            // goToStep(step+1);
          }
        }
      }
    }

    function processValue(value){
      console.log(value);
    }

    // Mock function for transition test
    function choose(value, step) {
      selectedChoices.splice(step-1,choices.length);
      selectedChoices.push(value);
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
